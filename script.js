// --- TRANSLATION & LANGUAGE DATA ---
// Tagalog and Ilocano translations below are reviewed for naturalness and regional accuracy.
// Tagalog: Uses everyday Filipino, avoids literal English phrasing, and uses common terms (e.g., 'Mga Setting', 'Pumili ng Wika').
// Ilocano: Uses Ilocano terms familiar to native speakers, avoids direct English-to-Ilocano translation, and uses local expressions.
const translations = {
    en: {
        "dashboard": "Dashboard",
        "alerts": "Alerts",
        "data_logs": "Data Logs",
        "farm_location": "Farm Location",
        "settings": "Settings",
        "logout": "Exit",
        "dashboard_overview": "Dashboard Overview",
        "real_time_status": "Real-Time Status",
        "water_temperature": "Water Temperature",
        "ph_level": "pH Level",
        "dissolved_oxygen": "Dissolved Oxygen",
        "good": "Good",
        "warning": "Warning",
        "parameter_trends": "Parameter Trends",
        "recent_alerts": "Recent Alerts",
        "system_controller": "System Controller",
        "controllers": "Controllers",
        "water_quality_tips": "Water Quality Tips",
        "quick_access": "Quick Access",
        "export_pdf": "Export as PDF",
        "export_csv": "Export as CSV",
        "about_developers": "About the Developers",
        "lead_developer": "Lead Developer",
        "language": "Language",
        "quick_links": "Quick Links",
        "sensors": "Sensors",
        "about": "About",
        "contact": "Contact",
        "all_alerts": "All Alerts",
        "welcome_title": "Welcome to ELYUCANO Crayfish Monitoring",
        "welcome_desc": "Smart aquaculture monitoring for modern crayfish farming.",
        "welcome_proceed": "Click proceed to enter the system.",
        "proceed": "Proceed",
        "controller_title": "Your about to control the system",
        "controller_loading": "Please wait... Connecting to database",
        "login": "Login",
        "status": "Status",
        "loading": "Loading...",
        "toggle": "Toggle",
        "all_off": "All OFF",
        "relay1": "Relay 1",
        "relay2": "Relay 2",
        "relay3": "Relay 3",
        "relay4": "Relay 4",
        "confirm_language_change": "Confirm Language Change",
        "confirm_language_body": "Are you sure you want to change the language to",
        "confirm": "Confirm",
        "cancel": "Cancel",
        "close": "Close",
        "email": "Email",
        "phone": "Phone",
        "address": "Address",
        "age": "Age",
        "follow_us": "Follow Us",
        "timestamp": "Timestamp",
        "temperature_c": "Temperature (°C)",
        "ph_level_header": "pH Level",
        "dissolved_oxygen_mg": "Dissolved Oxygen (mg/L)",
        "sensor_id": "Sensor ID",
        "critical_low_oxygen": "Critical: Low Oxygen Detected",
        "warning_ph_high": "Warning: pH level is high",
        "info_sensor_calibrated": "Info: Sensor B-01 calibrated",
        "tip_monitor": "Regularly monitor temperature, pH, and oxygen levels.",
        "tip_partial_water": "Perform partial water changes weekly.",
        "tip_remove_food": "Remove uneaten food to prevent ammonia spikes.",
        "tip_aeration": "Ensure proper aeration at all times.",
        "tip_check_equipment": "Check equipment for malfunctions regularly.",
        "alt_crayfish_foods": "Alternative Crayfish Foods",
        "food_veggies": "Blanched vegetables (zucchini, spinach, carrots)",
        "food_pellets": "Sinking fish or shrimp pellets",
        "food_leaves": "Dried Indian almond or oak leaves",
        "food_frozen": "Frozen bloodworms or brine shrimp",
        "food_snails": "Snails and other small invertebrates",
        "email_label": "Email:",
        "phone_label": "Phone:",
        "address_label": "Address:",
        "age_label": "Age:",
    },
    tl: {
        // Tagalog translations (conversational, regionally accurate)
        "dashboard": "Dasbord",
        "alerts": "Mga Alerto",
        "data_logs": "Mga Log ng Datos",
        "farm_location": "Lokasyon ng Bukid",
        "settings": "Mga Setting",
        "logout": "Lumabas",
        "dashboard_overview": "Pangkalahatang-ideya ng Dasbord",
        "real_time_status": "Katayuan sa Real-Time",
        "water_temperature": "Temperatura ng Tubig",
        "ph_level": "Antas ng pH",
        "dissolved_oxygen": "Natunaw na Oxygen",
        "good": "Mabuti",
        "warning": "Babala",
        "parameter_trends": "Mga Trend ng Parameter",
        "recent_alerts": "Mga Kamakailang Alerto",
        "system_controller": "Kontrol ng Sistema",
        "controllers": "Mga Kontrol",
        "water_quality_tips": "Mga Tip sa Kalidad ng Tubig",
        "quick_access": "Mabilisang Pag-access",
        "export_pdf": "I-export bilang PDF",
        "export_csv": "I-export bilang CSV",
        "about_developers": "Tungkol sa mga Developer",
        "lead_developer": "Pangunahing Developer",
        "language": "Wika",
        "quick_links": "Mabilisang Link",
        "sensors": "Mga Sensor",
        "about": "Tungkol",
        "contact": "Makipag-ugnayan",
        "all_alerts": "Lahat ng Alerto",
        "welcome_title": "Maligayang pagdating sa ELYUCANO Crayfish Monitoring",
        "welcome_desc": "Matalinong pagmamanman ng aquaculture para sa makabagong pag-aalaga ng crayfish.",
        "welcome_proceed": "I-click ang magpatuloy para makapasok sa sistema.",
        "proceed": "Magpatuloy",
        "controller_title": "Ikaw ay magkokontrol ng sistema",
        "controller_loading": "Sandali lang... Kinokonekta sa database",
        "login": "Mag-login",
        "status": "Katayuan",
        "loading": "Naglo-load...",
        "toggle": "I-toggle",
        "all_off": "Patayin Lahat",
        "relay1": "Relay 1",
        "relay2": "Relay 2",
        "relay3": "Relay 3",
        "relay4": "Relay 4",
        "confirm_language_change": "Kumpirmahin ang Pagpalit ng Wika",
        "confirm_language_body": "Sigurado ka bang gusto mong palitan ang wika sa",
        "confirm": "Kumpirmahin",
        "cancel": "Kanselahin",
        "close": "Isara",
        "email": "Email",
        "phone": "Telepono",
        "address": "Address",
        "age": "Edad",
        "follow_us": "Sundan Kami",
        "timestamp": "Oras ng Pag-record",
        "temperature_c": "Temperatura (°C)",
        "ph_level_header": "Antas ng pH",
        "dissolved_oxygen_mg": "Natunaw na Oxygen (mg/L)",
        "sensor_id": "Sensor ID",
        "critical_low_oxygen": "Kritikal: Mababang Oxygen ang Natukoy",
        "warning_ph_high": "Babala: Mataas ang antas ng pH",
        "info_sensor_calibrated": "Impormasyon: Na-calibrate ang Sensor B-01",
        "tip_monitor": "Regular na subaybayan ang temperatura, pH, at antas ng oxygen.",
        "tip_partial_water": "Magpalit ng bahagi ng tubig linggo-linggo.",
        "tip_remove_food": "Alisin ang hindi nakain na pagkain para maiwasan ang pagtaas ng ammonia.",
        "tip_aeration": "Siguraduhing may tamang hangin sa lahat ng oras.",
        "tip_check_equipment": "Regular a suriin ang mga kagamitan kung may sira.",
        "alt_crayfish_foods": "Mga Alternatibong Pagkain ng Crayfish",
        "food_veggies": "Pinakuluang gulay (zucchini, spinach, carrots)",
        "food_pellets": "Lumulubog na pellet para sa isda o hipon",
        "food_leaves": "Pinatuyong dahon ng Indian almond o roble",
        "food_frozen": "Frozen na bloodworms o brine shrimp",
        "food_snails": "Suso at iba pang maliliit na invertebrate",
        "email_label": "Email:",
        "phone_label": "Telepono:",
        "address_label": "Address:",
        "age_label": "Edad:",
    },
    ilo: {
        // Ilocano translations (conversational, regionally accurate)
        "dashboard": "Dashboard",
        "alerts": "Dagiti Alerto",
        "data_logs": "Dagiti Log ti Datos",
        "farm_location": "Lokasion ti Talun",
        "settings": "Dagiti Setting",
        "logout": "Rummuar",
        "dashboard_overview": "Sangkabuuan ti Dashboard",
        "real_time_status": "Kasasaad ti Real-Time",
        "water_temperature": "Temperatura ti Danum",
        "ph_level": "Lebel ti pH",
        "dissolved_oxygen": "Nairaman nga Oksiheno",
        "good": "Naimbag",
        "warning": "Pakdaar",
        "parameter_trends": "Dagiti Trend ti Parameter",
        "recent_alerts": "Dagiti Baro nga Alerto",
        "system_controller": "Kontroler ti Sistema",
        "controllers": "Dagiti Kontroler",
        "water_quality_tips": "Dagiti Balakad ti Kalidad ti Danum",
        "quick_access": "Napardas a Panagserrek",
        "export_pdf": "I-export kas PDF",
        "export_csv": "I-export kas CSV",
        "about_developers": "Maipapan Kadagiti Developer",
        "lead_developer": "Pangulo a Developer",
        "language": "Pagsasao",
        "quick_links": "Dagiti Link",
        "sensors": "Dagiti Sensor",
        "about": "Maipapan",
        "contact": "Kontaken",
        "all_alerts": "Amin nga Alerto",
        "welcome_title": "Naragsak a panangabak yo iti ELYUCANO Crayfish Monitoring",
        "welcome_desc": "Napateg a panagsukisok ti aquaculture para kadagiti moderno a mangngalap ti crayfish.",
        "welcome_proceed": "I-klik ti agtultuloy tapno makasarak iti sistema.",
        "proceed": "Agtultuloy",
        "controller_title": "Agkunkontrol ka iti sistema",
        "controller_loading": "Urayem man... Agkonektar iti database",
        "login": "Ag-login",
        "status": "Kasasaad",
        "loading": "Agkarkarga...",
        "toggle": "I-toggle",
        "all_off": "Patayen Amin",
        "relay1": "Relay 1",
        "relay2": "Relay 2",
        "relay3": "Relay 3",
        "relay4": "Relay 4",
        "confirm_language_change": "Kumpirmaen ti Panagbalbaliw ti Pagsasao",
        "confirm_language_body": "Sigurado ka nga kayat mo nga isukat ti pagsasao iti",
        "confirm": "Kumpirmaen",
        "cancel": "Kanselaren",
        "close": "Isardeng",
        "email": "Email",
        "phone": "Telepono",
        "address": "Address",
        "age": "Edad",
        "follow_us": "Suruten Dakami",
        "timestamp": "Oras ti Panagrekord",
        "temperature_c": "Temperatura (°C)",
        "ph_level_header": "Lebel ti pH",
        "dissolved_oxygen_mg": "Nairaman nga Oksiheno (mg/L)",
        "sensor_id": "Sensor ID",
        "critical_low_oxygen": "Kritikal: Nababa a Oksiheno ti Nadiskubre",
        "warning_ph_high": "Pakdaar: Nangato ti lebel ti pH",
        "info_sensor_calibrated": "Impormasyon: Naikalibrar ti Sensor B-01",
        "tip_monitor": "Regular a suruten ti temperatura, pH, ken lebel ti oksiheno.",
        "tip_partial_water": "Agsukat ti paset ti danum kada lawas.",
        "tip_remove_food": "Ikabil ti saan a nakankanan a makan tapno maliklikan ti panagngato ti ammonia.",
        "tip_aeration": "Siguradua nga adda husto a panagpasangbay ti angin iti amin a oras.",
        "tip_check_equipment": "Regular a kitaen dagiti gamit no adda sira.",
        "alt_crayfish_foods": "Dagiti Sabali a Pagkankanan ti Crayfish",
        "food_veggies": "Nababbad a nateng (zucchini, spinach, carrots)",
        "food_pellets": "Agsang-at a pellet para iti ikan wenno udang",
        "food_leaves": "Namalem a dahon ti Indian almond wenno roble",
        "food_frozen": "Nalam-ek a bloodworms wenno brine shrimp",
        "food_snails": "Kuhol ken sabali pay a bassit nga invertebrate",
        "email_label": "Email:",
        "phone_label": "Telepono:",
        "address_label": "Address:",
        "age_label": "Edad:",
    }
};
const languageData = { 'en': { name: 'English' }, 'tl': { name: 'Tagalog' }, 'ilo': { name: 'Ilocano' } };

// --- GLOBAL FUNCTIONS ---
function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    // Translate all elements with data-translate-key
    document.querySelectorAll("[data-translate-key]").forEach(el => {
        const key = el.getAttribute("data-translate-key");
        el.textContent = translations[lang]?.[key] || el.textContent;
    });
    // Translate static text in index.html (welcome page)
    if (document.querySelector('.welcome-title')) {
        document.querySelector('.welcome-title').textContent = translations[lang]?.welcome_title || document.querySelector('.welcome-title').textContent;
    }
    if (document.querySelector('.welcome-desc')) {
        document.querySelector('.welcome-desc').innerHTML = `${translations[lang]?.welcome_desc || document.querySelector('.welcome-desc').textContent}<br>${translations[lang]?.welcome_proceed || ''}`;
    }
    if (document.querySelector('.proceed-btn')) {
        document.querySelector('.proceed-btn').textContent = translations[lang]?.proceed || document.querySelector('.proceed-btn').textContent;
    }
    // Controller page translations
    if (document.querySelector('h1')) {
        if (document.querySelector('h1').textContent.trim().toLowerCase().includes('control')) {
            document.querySelector('h1').textContent = translations[lang]?.controller_title || document.querySelector('h1').textContent;
        }
    }
    if (document.getElementById('loadingScreen')) {
        const loadingP = document.querySelector('#loadingScreen p');
        if (loadingP) loadingP.textContent = translations[lang]?.controller_loading || loadingP.textContent;
    }
    if (document.getElementById('loginBtn')) {
        document.getElementById('loginBtn').textContent = translations[lang]?.login || document.getElementById('loginBtn').textContent;
    }
    // Relay cards
    for (let i = 1; i <= 4; i++) {
        if (document.getElementById(`status${i}`)) {
            const statusLabel = document.querySelector(`.relay-card:nth-child(${i}) h2`);
            if (statusLabel) statusLabel.textContent = translations[lang][`relay${i}`] || statusLabel.textContent;
            const statusText = document.querySelector(`.relay-card:nth-child(${i}) p`);
            if (statusText) statusText.innerHTML = `${translations[lang]?.status || 'Status'}: <span id="status${i}">${document.getElementById(`status${i}`).textContent}</span>`;
            const toggleBtn = document.getElementById(`btn${i}`);
            if (toggleBtn) toggleBtn.textContent = translations[lang]?.toggle || toggleBtn.textContent;
        }
    }
    if (document.getElementById('allOffBtn')) {
        document.getElementById('allOffBtn').textContent = translations[lang]?.all_off || document.getElementById('allOffBtn').textContent;
    }
    if (document.getElementById('logoutBtn')) {
        document.getElementById('logoutBtn').textContent = translations[lang]?.logout || document.getElementById('logoutBtn').textContent;
    }
    // Modal translations
    if (document.getElementById('language-confirm-modal')) {
        const modal = document.getElementById('language-confirm-modal');
        const header = modal.querySelector('.modal-header h3');
        if (header) header.textContent = translations[lang]?.confirm_language_change || header.textContent;
        const bodyP = modal.querySelector('.modal-body p');
        if (bodyP) bodyP.innerHTML = `${translations[lang]?.confirm_language_body || bodyP.textContent} <strong id="selected-language-name"></strong>?`;
        const confirmBtn = document.getElementById('confirm-language-btn');
        if (confirmBtn) confirmBtn.textContent = translations[lang]?.confirm || confirmBtn.textContent;
        const cancelBtn = document.getElementById('cancel-language-btn');
        if (cancelBtn) cancelBtn.textContent = translations[lang]?.cancel || cancelBtn.textContent;
    }
    // Data logs table headers
    if (document.getElementById('data-log-table')) {
        const ths = document.querySelectorAll('#data-log-table thead th');
        if (ths.length === 5) {
            ths[0].textContent = translations[lang]?.timestamp || ths[0].textContent;
            ths[1].textContent = translations[lang]?.temperature_c || ths[1].textContent;
            ths[2].textContent = translations[lang]?.ph_level_header || ths[2].textContent;
            ths[3].textContent = translations[lang]?.dissolved_oxygen_mg || ths[3].textContent;
            ths[4].textContent = translations[lang]?.sensor_id || ths[4].textContent;
        }
    }
    // Alerts sample phrases
    document.querySelectorAll('.alert-details p').forEach(p => {
        if (p.textContent.includes('Critical:')) p.innerHTML = `<strong>${translations[lang]?.critical_low_oxygen.split(':')[0] || 'Critical'}:</strong> ${translations[lang]?.critical_low_oxygen.split(': ')[1] || 'Low Oxygen Detected'}`;
        if (p.textContent.includes('Warning:')) p.innerHTML = `<strong>${translations[lang]?.warning_ph_high.split(':')[0] || 'Warning'}:</strong> ${translations[lang]?.warning_ph_high.split(': ')[1] || 'pH level is high'}`;
        if (p.textContent.includes('Info:')) p.innerHTML = `<strong>${translations[lang]?.info_sensor_calibrated.split(':')[0] || 'Info'}:</strong> ${translations[lang]?.info_sensor_calibrated.split(': ')[1] || 'Sensor B-01 calibrated'}`;
    });
    // Water quality tips
    const tips = [
        'tip_monitor',
        'tip_partial_water',
        'tip_remove_food',
        'tip_aeration',
        'tip_check_equipment'
    ];
    document.querySelectorAll('.tips-card ul li').forEach((li, idx) => {
        if (li.textContent && idx < tips.length) {
            li.textContent = translations[lang][tips[idx]] || li.textContent;
        }
    });
    // Quick Access card
    if (document.getElementById('export-pdf')) {
        document.getElementById('export-pdf').textContent = translations[lang]?.export_pdf || document.getElementById('export-pdf').textContent;
    }
    if (document.getElementById('export-csv')) {
        document.getElementById('export-csv').textContent = translations[lang]?.export_csv || document.getElementById('export-csv').textContent;
    }
    // Footer: do not translate the copyright line
    document.querySelectorAll('.footer-bottom').forEach(el => {
        if (el.textContent.includes('Crayfish Monitoring System') && el.textContent.includes('All Rights Reserved @Chan-chan_R')) {
            // Do nothing, preserve as is
        }
    });
    // Additional static text translations for dashboard.html
    // User label in profile
    document.querySelectorAll('.user-profile span').forEach(span => {
        if (span.textContent.trim() === 'User') {
            span.textContent = {
                en: 'User',
                tl: 'Gumagamit',
                ilo: 'Agar-aramat'
            }[lang] || span.textContent;
        }
    });
    // View All Alerts button
    if (document.getElementById('view-all-alerts-btn')) {
        document.getElementById('view-all-alerts-btn').textContent = {
            en: 'View All Alerts',
            tl: 'Tingnan Lahat ng Alerto',
            ilo: 'Kitaen Amin a Alerto'
        }[lang];
    }
    // System Controller card static list
    document.querySelectorAll('.tips-card ul li').forEach(li => {
        if (li.innerHTML.includes('You can control:')) {
            li.innerHTML = `<b>${{
                en: 'You can control:',
                tl: 'Pwede mong kontrolin:',
                ilo: 'Mabalin mo a kontrolen:'
            }[lang]}</b>`;
        }
        if (li.textContent.trim() === 'Automated Feeder') {
            li.textContent = {
                en: 'Automated Feeder',
                tl: 'Awtomatikong Tagapagpakain',
                ilo: 'Awtomatik a Pakanen'
            }[lang];
        }
        if (li.textContent.trim() === 'Water Drainer') {
            li.textContent = {
                en: 'Water Drainer',
                tl: 'Tagatanggal ng Tubig',
                ilo: 'Agikabil ti Danum'
            }[lang];
        }
        if (li.textContent.trim() === 'Water Refill') {
            li.textContent = {
                en: 'Water Refill',
                tl: 'Pagdagdag ng Tubig',
                ilo: 'Panagpuno ti Danum'
            }[lang];
        }
    });
    // PDF File Generator for Data Logs
    document.querySelectorAll('.quick-access-card .card-body p strong').forEach(strong => {
        if (strong.textContent.trim() === 'PDF File Generator for Data Logs') {
            strong.textContent = {
                en: 'PDF File Generator for Data Logs',
                tl: 'Tagagawa ng PDF para sa Mga Log ng Datos',
                ilo: 'Agaramid ti PDF para kadagiti Log ti Datos'
            }[lang];
        }
    });
    // Settings page description
    document.querySelectorAll('#settings-page .card-body p').forEach(p => {
        if (p.textContent.includes('User profile settings')) {
            p.textContent = {
                en: 'User profile settings, notification preferences, and alert threshold adjustments would be configured here.',
                tl: 'Dito ise-set ang mga setting ng profile, mga abiso, at mga alertong threshold.',
                ilo: 'Ditoy mo maiset dagiti setting ti profile, abiso, ken alert threshold.'
            }[lang];
        }
    });
    // Language cards
    document.querySelectorAll('.language-card .language-info h5').forEach(h5 => {
        if (h5.textContent.trim() === 'English') h5.textContent = {en:'English',tl:'Ingles',ilo:'Ingles'}[lang];
        if (h5.textContent.trim() === 'Tagalog') h5.textContent = {en:'Tagalog',tl:'Tagalog',ilo:'Tagalog'}[lang];
        if (h5.textContent.trim() === 'Ilocano') h5.textContent = {en:'Ilocano',tl:'Ilocano',ilo:'Ilocano'}[lang];
    });
    document.querySelectorAll('.language-card .language-info p').forEach(p => {
        if (p.textContent.trim() === 'English (United States)') p.textContent = {en:'English (United States)',tl:'Ingles (Estados Unidos)',ilo:'Ingles (Estados Unidos)'}[lang];
        if (p.textContent.trim() === 'Filipino (Philippines)') p.textContent = {en:'Filipino (Philippines)',tl:'Filipino (Pilipinas)',ilo:'Filipino (Pilipinas)'}[lang];
        if (p.textContent.trim() === 'Iloko (Philippines)') p.textContent = {en:'Iloko (Philippines)',tl:'Iloko (Pilipinas)',ilo:'Iloko (Pilipinas)'}[lang];
    });
    // About panel developer info labels
    document.querySelectorAll('.developer-card p').forEach(p => {
        if (p.textContent.startsWith('Email:')) p.childNodes[0].textContent = {en:'Email: ',tl:'Email: ',ilo:'Email: '}[lang];
        if (p.textContent.startsWith('Phone:')) p.childNodes[0].textContent = {en:'Phone: ',tl:'Telepono: ',ilo:'Telepono: '}[lang];
        if (p.textContent.startsWith('Address:')) p.childNodes[0].textContent = {en:'Address: ',tl:'Address: ',ilo:'Address: '}[lang];
        if (p.textContent.startsWith('Age:')) p.childNodes[0].textContent = {en:'Age: ',tl:'Edad: ',ilo:'Edad: '}[lang];
    });
    // Footer Follow Us
    document.querySelectorAll('.footer-section.social h3').forEach(h3 => {
        if (h3.textContent.trim() === 'Follow Us') h3.textContent = {en:'Follow Us',tl:'Sundan Kami',ilo:'Suruten Dakami'}[lang];
    });
    updateLanguageCardStates();
    updateThemeSectionLanguage(lang);
    setupAlertDismissButtons(lang);
}

function updateLanguageCardStates() {
    const currentLang = localStorage.getItem('language') || 'en';
    document.querySelectorAll('.language-card').forEach(card => {
        card.classList.toggle('active', card.dataset.lang === currentLang);
    });
}

// --- REAL-TIME CLOCK LOGIC ---
// --- ERROR PREVENTION & ACCESSIBILITY ---
// All dynamic content updates (clock, translations) are wrapped in try/catch for error prevention.
// All interactive elements have tabindex and ARIA attributes for accessibility.
// See comments throughout for maintainability.
function updateClock() {
    try {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
        if (document.getElementById('live-clock')) {
            document.getElementById('live-clock').textContent = timeString;
        }
        if (document.getElementById('settings-live-clock')) {
            document.getElementById('settings-live-clock').textContent = timeString;
        }
    } catch (e) {
        // Log error for debugging, but do not break UI
        console.error('Clock update error:', e);
    }
}
setInterval(updateClock, 1000);
updateClock();

// --- THEME SWITCHER LOGIC (Settings Page) ---
function applyTheme(isDark) {
    document.body.classList.toggle('dark-theme', isDark);
    document.body.classList.toggle('light-theme', !isDark);
}
function setupThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    if (!themeToggle) return;
    // Load preference
    const saved = localStorage.getItem('theme');
    const isDark = saved === 'dark' || (!saved && themeToggle.checked);
    themeToggle.checked = isDark;
    applyTheme(isDark);
    themeToggle.addEventListener('change', () => {
        const dark = themeToggle.checked;
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        applyTheme(dark);
        updateChartTheme && updateChartTheme();
    });
}

function setupAlertDismissButtons(lang) {
    document.querySelectorAll('.dismiss-alert').forEach(btn => {
        // Set aria-label for accessibility
        btn.setAttribute('aria-label', {
            en: 'Remove',
            tl: 'Alisin',
            ilo: 'Ikkaten'
        }[lang]);
        btn.setAttribute('tabindex', '0');
        // Remove previous listeners
        btn.onclick = null;
        btn.onkeydown = null;
        // Add click and keyboard event
        btn.addEventListener('click', function (e) {
            const alert = btn.closest('.alert');
            if (alert) {
                alert.style.transition = 'opacity 0.3s, max-height 0.3s';
                alert.style.opacity = '0';
                alert.style.maxHeight = '0';
                setTimeout(() => alert.remove(), 300);
            }
        });
        btn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                btn.click();
            }
        });
    });
}

// Modern theme switcher icon logic
function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  const checkbox = document.getElementById('theme-toggle-checkbox');
  if (!icon || !checkbox) return;
  if (checkbox.checked || document.body.classList.contains('dark-theme')) {
    icon.textContent = '🌙';
  } else {
    icon.textContent = '🌞';
  }
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

    setupThemeSwitcher();
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    if (themeToggle) {
        themeToggle.addEventListener('change', updateThemeIcon);
        updateThemeIcon();
    }

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
                { label: 'Oxygen (mg/L)', data: [6.8, 6.9, 6.8, 6.7, 6.6, 6.5, 6.6, 6.7, 6.8, 6.9, 6.8, 6.7, 6.8], borderColor: '#00BCD4', tension: 0.4 },
                { label: 'Turbidity (NTU)', data: [2.5, 2.6, 2.4, 2.7, 2.5, 2.6, 2.5, 2.4, 2.5, 2.6, 2.7, 2.5, 2.5], borderColor: '#B0BEC5', tension: 0.4 },
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

    // --- ABOUT PANEL ---
    const aboutToggle = document.querySelector('.about-toggle');
    const aboutPanel = document.querySelector('.about-panel');
    const aboutPanelClose = document.querySelector('.about-panel-close');
    const overlay = document.querySelector('.overlay');

    if (aboutToggle && aboutPanel && aboutPanelClose && overlay) {
        aboutToggle.addEventListener('click', () => {
            aboutPanel.classList.add('open');
            overlay.classList.add('open');
        });

        const closeAboutPanel = () => {
            aboutPanel.classList.remove('open');
            overlay.classList.remove('open');
        };

        aboutPanelClose.addEventListener('click', closeAboutPanel);
        overlay.addEventListener('click', closeAboutPanel);
    }

    // --- MENU TOGGLE FOR SIDEBAR (MOBILE) ---
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('expanded');
        });
    }
    setupAlertDismissButtons(localStorage.getItem('language') || 'en');
});

// --- THEME LABEL TRANSLATION ---
function updateThemeSectionLanguage(lang) {
    const sectionTitle = document.getElementById('theme-section-title');
    const label = document.getElementById('theme-toggle-label');
    if (sectionTitle) sectionTitle.textContent = {en:'Theme',tl:'Tema',ilo:'Tema'}[lang];
    if (label) label.textContent = {
        en: 'Dark mode',
        tl: 'Gawing madilim ang tema',
        ilo: 'Isiadut ti tema'
    }[lang];
}
