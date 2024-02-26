document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form from submitting normally

    // You can add more sophisticated validation or AJAX calls here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation example
    if(username.trim() && password.trim()) {
        alert('Login successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
