// --- TRANSLATION & LANGUAGE DATA ---
const translations = {
    en: {
        "eyucano_crayfish": "EYUCANO Crayfish", "dashboard": "Dashboard", "alerts": "Alerts", "data_logs": "Data Logs",
        "farm_location": "Farm Location", "settings": "Settings", "logout": "Logout", "dashboard_overview": "Dashboard Overview",
        "real_time_status": "Real-Time Status", "water_temperature": "Water Temperature", "ph_level": "pH Level",
        "dissolved_oxygen": "Dissolved Oxygen", "good": "Good", "warning": "Warning", "parameter_trends": "Parameter Trends",
        "recent_alerts": "Recent Alerts", "system_controller": "System Controller", "controllers": "Controllers",
        "water_quality_tips": "Water Quality Tips", "quick_access": "Quick Access", "export_pdf": "Export as PDF",
        "export_csv": "Export as CSV", "about_developers": "About the Developers", "lead_developer": "Lead Developer",
        "language": "Language", "quick_links": "Quick Links", "sensors": "Sensors", "about": "About", "contact": "Contact",
        "all_alerts": "All Alerts"
    },
    tl: {
        "eyucano_crayfish": "EYUCANO Crayfish", "dashboard": "Dashboard", "alerts": "Mga Alerto", "data_logs": "Mga Log ng Datos",
        "farm_location": "Lokasyon ng Bukid", "settings": "Mga Setting", "logout": "Mag-log out", "dashboard_overview": "Pangkalahatang-ideya ng Dashboard",
        "real_time_status": "Katayuan sa Real-Time", "water_temperature": "Temperatura ng Tubig", "ph_level": "Antas ng pH",
        "dissolved_oxygen": "Natunaw na Oxygen", "good": "Mabuti", "warning": "Babala", "parameter_trends": "Mga Trend ng Parameter",
        "recent_alerts": "Mga Kamakailang Alerto", "system_controller": "System Controller", "controllers": "Mga Controller",
        "water_quality_tips": "Mga Tip sa Kalidad ng Tubig", "quick_access": "Mabilis na Pag-access", "export_pdf": "I-export bilang PDF",
        "export_csv": "I-export bilang CSV", "about_developers": "Tungkol sa Mga Developer", "lead_developer": "Nangungunang Developer",
        "language": "Wika", "quick_links": "Mga Mabilis na Link", "sensors": "Mga Sensor", "about": "Tungkol sa", "contact": "Makipag-ugnay",
        "all_alerts": "Lahat ng Alerto"
    },
    ilo: {
        "eyucano_crayfish": "EYUCANO Crayfish", "dashboard": "Dashboard", "alerts": "Dagiti Alerto", "data_logs": "Dagiti Log ti Datos",
        "farm_location": "Lokasion ti Talun", "settings": "Dagiti Seting", "logout": "Rummuar", "dashboard_overview": "Sangkakublan a Panagkita ti Dashboard",
        "real_time_status": "Kasasaad iti Real-Time", "water_temperature": "Temperatura ti Danum", "ph_level": "Lebel ti pH",
        "dissolved_oxygen": "Nairaman nga Oksiheno", "good": "Naimbag", "warning": "Pakdaar", "parameter_trends": "Dagiti Trend ti Parameter",
        "recent_alerts": "Dagiti Kabiitan nga Alerto", "system_controller": "Kontroler ti Sistema", "controllers": "Dagiti Kontroler",
        "water_quality_tips": "Dagiti Balakad iti Kalidad ti Danum", "quick_access": "Napardas a Panagserrek", "export_pdf": "I-export kas PDF",
        "export_csv": "I-export kas CSV", "about_developers": "Maipapan Kadagiti Developer", "lead_developer": "Pangbuyotan a Developer",
        "language": "Pagsasao", "quick_links": "Napardas a Links", "sensors": "Dagiti Sensor", "about": "Maipapan", "contact": "Kontaken",
        "all_alerts": "Amin a Alerto"
    }
};
const languageData = { 'en': { name: 'English' }, 'tl': { name: 'Tagalog' }, 'ilo': { name: 'Ilocano' } };

// --- GLOBAL FUNCTIONS ---
function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    document.querySelectorAll("[data-translate-key]").forEach(el => {
        const key = el.getAttribute("data-translate-key");
        el.textContent = translations[lang]?.[key] || el.textContent;
    });
    updateLanguageCardStates();
}

function updateLanguageCardStates() {
    const currentLang = localStorage.getItem('language') || 'en';
    document.querySelectorAll('.language-card').forEach(card => {
        card.classList.toggle('active', card.dataset.lang === currentLang);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // --- AUTH CHECK ---
    if (sessionStorage.getItem('loggedIn') !== 'true' && localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html'; return;
    }

    // --- INITIAL LANGUAGE SET ---
    setLanguage(localStorage.getItem('language') || 'en');

    // --- LANGUAGE CHANGER LOGIC ---
    const languageSelection = document.querySelector('.language-selection');
    const modal = document.getElementById('language-confirm-modal');
    if (languageSelection && modal) {
        let pendingLanguageChange = null;
        const confirmBtn = document.getElementById('confirm-language-btn');
        const cancelBtn = document.getElementById('cancel-language-btn');
        const modalClose = document.getElementById('modal-close');
        const selectedLanguageName = document.getElementById('selected-language-name');

        const closeModal = () => { modal.classList.remove('show'); pendingLanguageChange = null; };

        languageSelection.addEventListener('click', e => {
            const card = e.target.closest('.language-card');
            if (card && !card.classList.contains('active')) {
                pendingLanguageChange = card.dataset.lang;
                selectedLanguageName.textContent = languageData[pendingLanguageChange].name;
                modal.classList.add('show');
            }
        });

        confirmBtn.addEventListener('click', () => { if (pendingLanguageChange) { setLanguage(pendingLanguageChange); closeModal(); } });
        cancelBtn.addEventListener('click', closeModal);
        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    }

    // --- THEME SWITCHER ---
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme', themeToggle.checked);
        document.body.classList.toggle('light-theme', !themeToggle.checked);
        updateChartTheme();
    });

    // --- SIDEBAR & NAVIGATION ---
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebarMenu = document.querySelector('.sidebar-menu');
    const mainContent = document.querySelector('.main-content');
    const headerTitle = document.querySelector('.main-header h1');
    const contentSections = {
        dashboard: mainContent.querySelector('.dashboard-grid'),
        alerts: mainContent.querySelector('#alerts-page'),
        datalogs: mainContent.querySelector('#datalogs-page'),
        settings: mainContent.querySelector('#settings-page'),
    };

    function navigateTo(pageId) {
        sidebarMenu.querySelector('.active')?.classList.remove('active');
        sidebarMenu.querySelector(`a[data-page="${pageId}"]`)?.parentElement.classList.add('active');
        Object.values(contentSections).forEach(s => s.style.display = 'none');
        if (contentSections[pageId]) {
            contentSections[pageId].style.display = pageId === 'dashboard' ? 'grid' : 'block';
        }
        const pageTitles = { dashboard: 'dashboard_overview', alerts: 'all_alerts', datalogs: 'data_logs', settings: 'settings' };
        headerTitle.dataset.translateKey = pageTitles[pageId];
        setLanguage(localStorage.getItem('language') || 'en');
        if (window.innerWidth <= 768) sidebar.classList.remove('expanded');
    }

    if (sidebarMenu) {
        const navLinks = sidebarMenu.querySelectorAll('a');
        navLinks.forEach((link, i) => {
            const page = ['dashboard', 'alerts', 'datalogs', 'farm_location', 'settings'][i];
            if(page) link.dataset.page = page;
        });
        sidebarMenu.addEventListener('click', e => {
            const link = e.target.closest('a');
            if (link?.dataset.page) { e.preventDefault(); navigateTo(link.dataset.page); }
        });
    }
    
    // --- CHART.JS LOGIC ---
    const ctx = document.getElementById('trendsChart');
    let trendsChart;
    const initialData = {
        '24h': {
            labels: Array(13).fill().map((_, i) => i * 5),
            datasets: [
                { label: 'Temperature (°C)', data: [25.0, 25.1, 25.0, 25.2, 25.3, 25.1, 25.0, 25.2, 25.4, 25.3, 25.5, 25.4, 25.4], borderColor: '#0D47A1', tension: 0.4 },
                { label: 'pH', data: [7.2, 7.2, 7.1, 7.1, 7.2, 7.3, 7.2, 7.1, 7.0, 7.1, 7.2, 7.2, 7.2], borderColor: '#FFC107', tension: 0.4 },
                { label: 'Oxygen (mg/L)', data: [6.8, 6.9, 6.8, 6.7, 6.6, 6.5, 6.6, 6.7, 6.8, 6.9, 6.8, 6.7, 6.8], borderColor: '#00BCD4', tension: 0.4 }
            ]
        },
    };

    function getChartOptions() {
        const isDark = document.body.classList.contains('dark-theme');
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const textColor = isDark ? '#e2e8f0' : '#333';
        return {
            responsive: true, maintainAspectRatio: false,
            scales: { y: { grid: { color: gridColor }, ticks: { color: textColor } }, x: { grid: { color: gridColor }, ticks: { color: textColor } } },
            plugins: { legend: { labels: { color: textColor } } }
        };
    }

    function updateChartTheme() {
        if (!trendsChart) return;
        trendsChart.options = getChartOptions();
        trendsChart.update();
    }

    function createChart() {
        if (!ctx) return;
        trendsChart = new Chart(ctx, { type: 'line', data: initialData['24h'], options: getChartOptions() });
    }
    createChart();


    // --- LOGOUT & FINAL INIT ---
    document.getElementById('logout-button')?.addEventListener('click', e => {
        e.preventDefault();
        sessionStorage.removeItem('loggedIn');
        localStorage.removeItem('loggedIn');
        window.location.href = 'index.html';
    });
    feather.replace();

    // --- LOGO MODAL ---
    const logo = document.getElementById('expandable-logo');
    const logoModal = document.getElementById('logo-modal');
    const logoModalClose = document.getElementById('logo-modal-close');
    if (logo && logoModal && logoModalClose) {
        logo.addEventListener('click', () => logoModal.classList.add('show'));
        logoModalClose.addEventListener('click', () => logoModal.classList.remove('show'));
        logoModal.addEventListener('click', (e) => { if (e.target === logoModal) logoModal.classList.remove('show'); });
    }

    // --- VIEW ALL ALERTS BUTTON ---
    const viewAllAlertsBtn = document.getElementById('view-all-alerts-btn');
    if (viewAllAlertsBtn) {
        viewAllAlertsBtn.addEventListener('click', () => {
            navigateTo('alerts');
        });
    }
});
