// --- LOGOUT ---
// Use event delegation for a more robust click handler
// This must be outside DOMContentLoaded so it always works

document.body.addEventListener('click', (e) => {
    if (e.target.closest('#logout-button')) {
        e.preventDefault();
        sessionStorage.removeItem('loggedIn');
        localStorage.removeItem('loggedIn');
        window.location.href = 'index.html';
    }
});

document.addEventListener('DOMContentLoaded', function () {

    // --- AUTHENTICATION CHECK ---
    if (sessionStorage.getItem('loggedIn') !== 'true' && localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html'; // Redirect to login page
        return; // Stop executing script
    }

    // --- THEME SWITCHER ---
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const body = document.body;

    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        }
        // We need to update chart colors when theme changes
        updateChartTheme();
    });

    // --- SIDEBAR TOGGLE ---
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    // For desktop to expand/collapse
    sidebar.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
           sidebar.classList.add('expanded');
        }
    });
    sidebar.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768 && !sidebar.matches(':hover')) {
           sidebar.classList.remove('expanded');
        }
    });

    // For mobile to toggle
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
    });

    // --- ALERT DISMISSAL ---
    const alertList = document.querySelector('.alert-list');
    if (alertList) {
        alertList.addEventListener('click', function(e) {
            if (e.target.closest('.dismiss-alert')) {
                const alertItem = e.target.closest('.alert');
                alertItem.style.transition = 'opacity 0.3s, transform 0.3s';
                alertItem.style.opacity = '0';
                alertItem.style.transform = 'translateX(100%)';
                setTimeout(() => alertItem.remove(), 300);
            }
        });
    }

    // --- CHART.JS ---
    const ctx = document.getElementById('trendsChart');
    if (!ctx) return;

    let trendsChart;

    const initialData = {
        '24h': {
            labels: ['-60s', '-55s', '-50s', '-45s', '-40s', '-35s', '-30s', '-25s', '-20s', '-15s', '-10s', '-5s', 'Now'],
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: [25.0, 25.1, 25.0, 25.2, 25.3, 25.1, 25.0, 25.2, 25.4, 25.3, 25.5, 25.4, 25.4],
                    borderColor: '#0D47A1',
                    backgroundColor: 'rgba(13, 71, 161, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'pH',
                    data: [7.2, 7.2, 7.1, 7.1, 7.2, 7.3, 7.2, 7.1, 7.0, 7.1, 7.2, 7.2, 7.2],
                    borderColor: '#FFC107',
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Oxygen (mg/L)',
                    data: [6.8, 6.9, 6.8, 6.7, 6.6, 6.5, 6.6, 6.7, 6.8, 6.9, 6.8, 6.7, 6.8],
                    borderColor: '#00BCD4',
                    backgroundColor: 'rgba(0, 188, 212, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        '7d': {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: [25.1, 24.8, 25.3, 25.0, 25.5, 25.2, 24.9],
                    borderColor: '#0D47A1',
                    tension: 0.4
                },
                {
                    label: 'pH',
                    data: [7.0, 7.1, 7.2, 7.1, 7.3, 7.2, 7.1],
                    borderColor: '#FFC107',
                    tension: 0.4
                },
                 {
                    label: 'Oxygen (mg/L)',
                    data: [6.8, 6.9, 6.7, 6.8, 6.6, 6.7, 6.9],
                    borderColor: '#00BCD4',
                    tension: 0.4
                }
            ]
        },
        '30d': {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: [25.0, 25.4, 24.9, 25.3],
                    borderColor: '#0D47A1',
                    tension: 0.4
                },
                {
                    label: 'pH',
                    data: [7.2, 7.0, 7.3, 7.1],
                    borderColor: '#FFC107',
                    tension: 0.4
                },
                {
                    label: 'Oxygen (mg/L)',
                    data: [6.7, 6.9, 6.8, 6.6],
                    borderColor: '#00BCD4',
                    tension: 0.4
                }
            ]
        }
    };
    
    // Use a deep copy for chart data to avoid modifying the initial state
    let chartData = JSON.parse(JSON.stringify(initialData));

    function getChartOptions() {
        const isDark = body.classList.contains('dark-theme');
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const textColor = isDark ? '#e2e8f0' : '#333';

        return {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    grid: { color: gridColor },
                    ticks: { color: textColor }
                },
                x: {
                    grid: { color: gridColor },
                    ticks: { color: textColor }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
    }

    function createChart(timeRange) {
        if (trendsChart) {
            trendsChart.destroy();
        }
        trendsChart = new Chart(ctx, {
            type: 'line',
            data: chartData[timeRange],
            options: getChartOptions()
        });
    }
    
    function updateChartTheme() {
        if(trendsChart) {
            trendsChart.options = getChartOptions();
            // Update dataset colors for theme change
            trendsChart.data.datasets.forEach(dataset => {
                 const isDark = body.classList.contains('dark-theme');
                 if(dataset.label.includes('Temperature')) {
                    dataset.borderColor = isDark ? '#42A5F5' : '#0D47A1';
                    dataset.backgroundColor = isDark ? 'rgba(66, 165, 245, 0.1)' : 'rgba(13, 71, 161, 0.1)';
                 } else if (dataset.label.includes('pH')) {
                    dataset.borderColor = isDark ? '#FFEE58' : '#FFC107';
                     dataset.backgroundColor = isDark ? 'rgba(255, 238, 88, 0.1)' : 'rgba(255, 193, 7, 0.1)';
                 } else if (dataset.label.includes('Oxygen')) {
                    dataset.borderColor = isDark ? '#4DD0E1' : '#00BCD4';
                     dataset.backgroundColor = isDark ? 'rgba(77, 208, 225, 0.1)' : 'rgba(0, 188, 212, 0.1)';
                 }
            });
            trendsChart.update();
        }
    }

    // Time range toggle for chart
    const timeRangeToggle = document.querySelector('.time-range-toggle');
    if (timeRangeToggle) {
        timeRangeToggle.addEventListener('click', function (e) {
            if (e.target.tagName === 'BUTTON' && !e.target.classList.contains('active')) {
                this.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                const timeRange = e.target.textContent.toLowerCase();
                // Reset data when switching views to not mix real-time and historical
                chartData[timeRange] = JSON.parse(JSON.stringify(initialData[timeRange]));
                createChart(timeRange);
            }
        });
    }

    // Initial Chart Render
    createChart('24h');
    
    // --- REAL-TIME DATA SIMULATION ---
    const statusItems = {
        temp: document.querySelector('.status-item:nth-child(1) h3'),
        ph: document.querySelector('.status-item:nth-child(2) h3'),
        oxygen: document.querySelector('.status-item:nth-child(3) h3')
    };
    const statusBadges = {
        temp: document.querySelector('.status-item:nth-child(1) .status-badge'),
        ph: document.querySelector('.status-item:nth-child(2) .status-badge'),
        oxygen: document.querySelector('.status-item:nth-child(3) .status-badge')
    };
    
    let lastAlertTime = 0;

    function createAlert(level, message) {
        const now = Date.now();
        // Debounce alerts to avoid spamming
        if (now - lastAlertTime < 10000) return; 
        lastAlertTime = now;

        const dashboardAlertList = document.querySelector('.dashboard-grid .alert-list');
        const allAlertsList = document.querySelector('#alerts-page .alert-list');

        const newAlert = document.createElement('li');
        newAlert.className = `alert ${level}`;
        
        const icon = level === 'critical' ? 'alert-octagon' : (level === 'warning' ? 'alert-triangle' : 'info');
        const formattedTimestamp = new Date().toLocaleString('en-US', {
            month: '2-digit', day: '2-digit', year: 'numeric', 
            hour: '2-digit', minute: '2-digit', hour12: false
        }).replace(',', '');

        newAlert.innerHTML = `
            <i data-feather="${icon}"></i>
            <div class="alert-details">
                <p><strong>${level.charAt(0).toUpperCase() + level.slice(1)}:</strong> ${message}</p>
                <small>${formattedTimestamp}</small>
            </div>
            <button class="dismiss-alert"><i data-feather="x"></i></button>
        `;

        // Add to the dedicated alerts page
        if (allAlertsList) {
            allAlertsList.prepend(newAlert.cloneNode(true));
        }

        // Add to the main dashboard alerts, keeping it to max 3
        if (dashboardAlertList) {
            dashboardAlertList.prepend(newAlert);
            while (dashboardAlertList.children.length > 3) {
                dashboardAlertList.lastElementChild.remove();
            }
        }

        feather.replace(); // Re-initialize icons
    }

    function updateSensorReadings() {
        // Simulate new data
        let temp = parseFloat(statusItems.temp.textContent);
        let ph = parseFloat(statusItems.ph.textContent);
        let oxygen = parseFloat(statusItems.oxygen.textContent);

        temp += (Math.random() - 0.5) * 0.2;
        ph += (Math.random() - 0.5) * 0.1;
        oxygen += (Math.random() - 0.5) * 0.2;

        // Update display
        statusItems.temp.textContent = `${temp.toFixed(1)} °C`;
        statusItems.ph.textContent = ph.toFixed(1);
        statusItems.oxygen.textContent = `${oxygen.toFixed(1)} mg/L`;

        // Update badges (no alert creation here)
        updateBadge(statusBadges.temp, temp, { good: [24, 28], warn: [22, 30] });
        updateBadge(statusBadges.ph, ph, { good: [6.8, 7.8], warn: [6.5, 8.5] });
        updateBadge(statusBadges.oxygen, oxygen, { good: [6.5, 9], warn: [6, 6.5] });

        // Update live chart if 'Live' (or '24h') is active
        if (document.querySelector('.time-range-toggle button.active').textContent.trim().toLowerCase() === 'live' ||
            document.querySelector('.time-range-toggle button.active').textContent.trim().toLowerCase() === '24h') {
            const chart = trendsChart;
            // Add new data
            chart.data.labels.push('Now');
            chart.data.datasets[0].data.push(temp.toFixed(1));
            chart.data.datasets[1].data.push(ph.toFixed(1));
            chart.data.datasets[2].data.push(oxygen.toFixed(1));
            // Remove oldest data
            chart.data.labels.shift();
            chart.data.datasets.forEach(dataset => dataset.data.shift());
            chart.update();
        }

        // Also update individual sensor page if it's active
        const activeSensorPage = document.querySelector('.sensor-page[style*="display: block"]');
        if (activeSensorPage) {
            const sensorId = activeSensorPage.id.replace('-page', '');
            if(sensorData[sensorId]) {
                 // Update its specific cards
                const pageStatusItems = {
                    temp: activeSensorPage.querySelector('.status-item:nth-child(1) h3'),
                    ph: activeSensorPage.querySelector('.status-item:nth-child(2) h3'),
                    oxygen: activeSensorPage.querySelector('.status-item:nth-child(3) h3')
                };
                pageStatusItems.temp.textContent = `${temp.toFixed(1)} °C`;
                pageStatusItems.ph.textContent = ph.toFixed(1);
                pageStatusItems.oxygen.textContent = `${oxygen.toFixed(1)} mg/L`;

                // Update its chart
                const sensorChart = sensorData[sensorId].chart;
                if(sensorChart) {
                    sensorChart.data.labels.push('Now');
                    sensorChart.data.datasets[0].data.push(temp.toFixed(1));
                    sensorChart.data.datasets[1].data.push(ph.toFixed(1));
                    sensorChart.data.datasets[2].data.push(oxygen.toFixed(1));
                    sensorChart.data.labels.shift();
                    sensorChart.data.datasets.forEach(dataset => dataset.data.shift());
                    sensorChart.update();
                }
            }
        }
    }

    function updateBadge(badgeElement, value, thresholds, alertMessage) {
        let status = 'critical';
        let text = 'Critical';

        if (value >= thresholds.good[0] && value <= thresholds.good[1]) {
            status = 'good';
            text = 'Good';
        } else if (value >= thresholds.warn[0] && value <= thresholds.warn[1]) {
            status = 'warning';
            text = 'Warning';
        }
        
        badgeElement.className = `status-badge ${status}`;
        badgeElement.textContent = text;
        
        if (status === 'critical' || status === 'warning') {
            createAlert(status, alertMessage || `Value is ${text}`);
        }
    }

    // Generate a random alert every 10 seconds for prototyping
    function generateRandomAlert() {
        const levels = ['critical', 'warning', 'info'];
        const messages = [
            'Low Oxygen Detected',
            'pH level is high',
            'Sensor B-01 calibrated',
            'Temperature spike detected',
            'Sensor disconnected',
            'Water quality optimal',
            'Routine check completed'
        ];
        const level = levels[Math.floor(Math.random() * levels.length)];
        const message = messages[Math.floor(Math.random() * messages.length)];
        createAlert(level, message);
    }

    // Update sensor readings every 5 seconds
    setInterval(updateSensorReadings, 5000);
    // Generate alerts every 10 seconds
    setInterval(generateRandomAlert, 10000);

    // --- ABOUT PANEL ---
    const aboutToggle = document.querySelector('.about-toggle');
    const aboutPanel = document.querySelector('.about-panel');
    const aboutPanelClose = document.querySelector('.about-panel-close');
    const overlay = document.querySelector('.overlay');

    function openAboutPanel() {
        aboutPanel.classList.add('open');
        overlay.classList.add('active');
    }
    function closeAboutPanel() {
        aboutPanel.classList.remove('open');
        overlay.classList.remove('active');
    }
    aboutToggle.addEventListener('click', openAboutPanel);
    aboutPanelClose.addEventListener('click', closeAboutPanel);
    overlay.addEventListener('click', closeAboutPanel);

    // --- SENSOR PAGE & NAVIGATION ---
    const sensorData = {
        'sensor-alpha-01': {
            name: 'Sensor Alpha-01',
            location: 'Main Pond',
            chart: null,
            data: JSON.parse(JSON.stringify(initialData['24h'])) // Clone initial data
        },
        'sensor-beta-02': {
            name: 'Sensor Beta-02',
            location: 'Nursery Tank',
            chart: null,
            data: JSON.parse(JSON.stringify(initialData['24h'])) // Clone initial data
        }
    };

    function generateSensorPageHTML(sensorId) {
        const sensor = sensorData[sensorId];
        return `
            <div class="sensor-page-grid">
                <div class="card overview-card">
                    <div class="card-header">
                        <h2>Real-Time Status</h2>
                    </div>
                    <div class="card-body">
                        <div class="status-item">
                            <div class="status-icon temperature"><i data-feather="thermometer"></i></div>
                            <div class="status-info"><p>Water Temperature</p><h3>25.4 °C</h3></div>
                            <div class="status-badge good">Good</div>
                        </div>
                        <div class="status-item">
                            <div class="status-icon ph"><i data-feather="droplet"></i></div>
                            <div class="status-info"><p>pH Level</p><h3>7.2</h3></div>
                            <div class="status-badge good">Good</div>
                        </div>
                        <div class="status-item">
                            <div class="status-icon oxygen"><i data-feather="wind"></i></div>
                            <div class="status-info"><p>Dissolved Oxygen</p><h3>6.8 mg/L</h3></div>
                            <div class="status-badge warning">Warning</div>
                        </div>
                    </div>
                </div>

                <div class="card chart-card">
                    <div class="card-header">
                        <h2>Parameter Trends</h2>
                    </div>
                    <div class="card-body">
                        <canvas id="${sensorId}-chart"></canvas>
                    </div>
                </div>
            </div>
        `;
    }

    function createSensorChart(sensorId) {
        const sensor = sensorData[sensorId];
        const ctx = document.getElementById(`${sensorId}-chart`).getContext('2d');
        if (sensor.chart) {
            sensor.chart.destroy();
        }
        sensor.chart = new Chart(ctx, {
            type: 'line',
            data: sensor.data,
            options: getChartOptions()
        });
    }

    const mainContent = document.querySelector('.main-content');
    const deviceStatusCard = document.querySelector('.device-status-card');

    mainContent.addEventListener('click', (e) => {
        const link = e.target.closest('a.device-item-link');
        if (!link) return;
        e.preventDefault();
        
        const targetPageId = link.getAttribute('href').substring(1); // #sensor-alpha-01
        navigateTo(targetPageId);
    });
    
    // --- NAVIGATION ---
    const sidebarMenu = document.querySelector('.sidebar-menu');
    const contentSections = {
        dashboard: mainContent.querySelector('.dashboard-grid'),
        alerts: mainContent.querySelector('#alerts-page'),
        datalogs: mainContent.querySelector('#datalogs-page'),
        settings: mainContent.querySelector('#settings-page'),
        'sensor-alpha-01': mainContent.querySelector('#sensor-alpha-01-page'),
        'sensor-beta-02': mainContent.querySelector('#sensor-beta-02-page'),
    };
    const headerTitle = document.querySelector('.main-header h1');

    function navigateTo(pageId) {
        // Handle sidebar active state
        const activeLink = sidebarMenu.querySelector('.active');
        if(activeLink) activeLink.classList.remove('active');
        
        const newActiveLink = sidebarMenu.querySelector(`a[href="#${pageId.startsWith('sensor-') ? 'dashboard' : pageId}"]`);
        if(newActiveLink) newActiveLink.parentElement.classList.add('active');

        // Hide all sections
        for (let section in contentSections) {
            if(contentSections[section]) contentSections[section].style.display = 'none';
        }
        
        // Show target section
        let targetSection;
        if (pageId.startsWith('sensor-')) {
            targetSection = contentSections[pageId];
            const sensor = sensorData[pageId];
            headerTitle.textContent = `${sensor.name} - ${sensor.location}`;
            if (!targetSection.innerHTML.trim()) {
                targetSection.innerHTML = generateSensorPageHTML(pageId);
                feather.replace();
            }
            targetSection.style.display = 'block';
            createSensorChart(pageId);
        } else {
             switch(pageId) {
                case 'dashboard':
                    targetSection = contentSections.dashboard;
                    headerTitle.textContent = 'Dashboard';
                    break;
                case 'alerts':
                    targetSection = contentSections.alerts;
                    headerTitle.textContent = 'All Alerts';
                    break;
                case 'datalogs':
                    targetSection = contentSections.datalogs;
                    headerTitle.textContent = 'Data Logs';
                    break;
                case 'settings':
                    targetSection = contentSections.settings;
                    headerTitle.textContent = 'Settings';
                    break;
                default:
                    targetSection = contentSections.dashboard;
                    headerTitle.textContent = 'Dashboard';
            }
            if(targetSection) targetSection.style.display = pageId === 'dashboard' ? 'grid' : 'block';
        }
       

        // For mobile, close sidebar after navigation
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('expanded');
        }
    }

    sidebarMenu.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        e.preventDefault();
        const targetPageId = link.getAttribute('href').substring(1); // remove #
        navigateTo(targetPageId);
    });

    // Match sidebar links to their sections
    const navLinks = sidebarMenu.querySelectorAll('a');
    navLinks[0].setAttribute('href', '#dashboard');
    navLinks[1].setAttribute('href', '#alerts');
    navLinks[2].setAttribute('href', '#datalogs');
    // We don't have a farm location page yet
    navLinks[3].setAttribute('href', '#dashboard');
    navLinks[4].setAttribute('href', '#settings');
    navLinks[5].setAttribute('href', '#sensor-alpha-01');
    navLinks[6].setAttribute('href', '#sensor-beta-02');


    // --- CSV EXPORT ---
    const exportBtn = document.getElementById('export-csv');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const table = document.getElementById('data-log-table');
            let csv = [];
            // Headers
            const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent);
            csv.push(headers.join(','));
            // Rows
            const rows = table.querySelectorAll('tbody tr');
            for (const row of rows) {
                const rowData = Array.from(row.querySelectorAll('td')).map(td => td.textContent);
                csv.push(rowData.join(','));
            }
            
            const csvContent = 'data:text/csv;charset=utf-8,' + csv.join('\n');
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'crayfish_data_log.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Add PDF export functionality for data logs
    if (document.getElementById('export-pdf')) {
        document.getElementById('export-pdf').addEventListener('click', function() {
            const table = document.getElementById('data-log-table');
            if (!table) return;
            // Use html2canvas and jsPDF to export table as PDF
            html2canvas(table).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('l', 'pt', 'a4');
                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = pageWidth - 40;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                pdf.addImage(imgData, 'PNG', 20, 20, imgWidth, imgHeight);
                pdf.save('crayfish_data_log.pdf');
            });
        });
    }

    // --- Initial icon replacement ---
    feather.replace();
});
