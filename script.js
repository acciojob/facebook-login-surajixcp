//your JS code here. If required.
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (email === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        // Here you can add your login logic (e.g., API call)
        alert('Login successful!'); // Placeholder for successful login
    }
});
