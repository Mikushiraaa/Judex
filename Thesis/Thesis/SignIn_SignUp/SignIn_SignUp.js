document.addEventListener('DOMContentLoaded', function() {
    const toggleSignIn = document.getElementById('toggle-signin');
    const toggleSignUp = document.getElementById('toggle-signup');
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const goToSignUp = document.getElementById('go-to-signup');
    const goToLogin = document.getElementById('go-to-login');
    const password = document.getElementById('signup-password');
    const confirmPassword = document.getElementById('confirm-password'); 
    const toggleSignupPassword = document.getElementById('toggle-signup-password');
    const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
    const loginPassword = document.getElementById('password');
    const toggleLoginPassword = document.getElementById('toggle-password');

    toggleSignIn.addEventListener('click', function() {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
        toggleSignIn.classList.add('active');
        toggleSignUp.classList.remove('active');
    });

    toggleSignUp.addEventListener('click', function() {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
        toggleSignUp.classList.add('active');
        toggleSignIn.classList.remove('active');
    });

    goToSignUp.addEventListener('click', function(event) {
        event.preventDefault();
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
        toggleSignUp.classList.add('active');
        toggleSignIn.classList.remove('active');
    });

    goToLogin.addEventListener('click', function(event) {
        event.preventDefault();
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
        toggleSignIn.classList.add('active');
        toggleSignUp.classList.remove('active');
    });

    // Show/hide password for Sign Up
    toggleSignupPassword.addEventListener('click', function() {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });

    toggleConfirmPassword.addEventListener('click', function() {
        const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });

    // Show/hide password for Sign In
    toggleLoginPassword.addEventListener('click', function() {
        const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        loginPassword.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });
});

// Para sa animation ng Sign In at Sign Up
document.getElementById('go-to-signup').addEventListener('click', function() {
    document.getElementById('container').classList.add('right-panel-active');
});

document.getElementById('go-to-login').addEventListener('click', function() {
    document.getElementById('container').classList.remove('right-panel-active');
});