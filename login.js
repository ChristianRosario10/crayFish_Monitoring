document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('remember-me');
    const errorMessage = document.getElementById('error-message');
    const loginButton = document.querySelector('.login-button');
    const buttonText = document.querySelector('.button-text');
    const loader = document.querySelector('.loader');
    const passwordToggle = document.querySelector('.password-toggle');

    // Check if user is already logged in
    if (sessionStorage.getItem('loggedIn') === 'true' || localStorage.getItem('loggedIn') === 'true') {
        window.location.href = 'dashboard.html';
    }

    // Password visibility toggle
    passwordToggle.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        passwordToggle.querySelector('i').setAttribute('data-feather', type === 'password' ? 'eye-off' : 'eye');
        feather.replace();
    });

    // Handle form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Show loader
        buttonText.style.display = 'none';
        loader.style.display = 'block';
        loginButton.disabled = true;
        errorMessage.textContent = '';

        // Simulate network request
        setTimeout(() => {
            if (username === 'cray_fish' && password === 'grp7') {
                // Successful login
                if (rememberMeCheckbox.checked) {
                    localStorage.setItem('loggedIn', 'true');
                } else {
                    sessionStorage.setItem('loggedIn', 'true');
                }
                window.location.href = 'dashboard.html';
            } else {
                // Failed login
                errorMessage.textContent = 'Invalid username or password.';
                buttonText.style.display = 'block';
                loader.style.display = 'none';
                loginButton.disabled = false;
            }
        }, 1000);
    });
});

