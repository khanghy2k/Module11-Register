const registerForm = document.getElementById('register-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        saveAccount();
        window.location.href = "login.html";
    }
});

function validateForm() {
    if (!emailInput.checkValidity()) {
        errorMessage.innerText = "Please enter a valid email address.";
        return false;
    } else if (passwordInput.value === "") {
        errorMessage.innerText = "Please enter a password.";
        return false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.innerText = "Passwords do not match.";
        return false;
    } else {
        return true;
    }
}

function saveAccount() {
    const account = {
        email: emailInput.value,
        password: passwordInput.value
    };
    localStorage.setItem('account', JSON.stringify(account));
}
