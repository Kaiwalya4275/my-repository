document.getElementById('login-password-show').addEventListener('change', function() {
    const passwordField = document.getElementById('login-password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful');
        window.location.href = '1.html'; // Redirect to the main page (1.html)
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
