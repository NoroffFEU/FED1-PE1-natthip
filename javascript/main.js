document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission


    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;


    if (password !== confirmPassword) {
        document.getElementById('error-message').textContent = "Passwords do not match";
        return;
    }


    const formData = {
        username: username,
        email: email,
        password: password
    };

    fetch('https://v2.api.noroff.dev/docs/static/index.html#/auth/post_auth_register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {

            window.location.href = "/account/login.html";
        } else {
            document.getElementById('error-message').textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = "An error occurred while processing your request";
    });
});





document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Prepare the data to be sent in the request
    const data = { username, password };

    // Send the login request to the server
    fetch('https://v2.api.noroff.dev/api/v2/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.accessToken) { // Assuming the API returns an accessToken on successful login
            // Store the accessToken in localStorage
            localStorage.setItem('accessToken', data.accessToken);

            // Show the popup message
            alert('Login successfully');

            // Redirect to a different page if needed
            window.location.href = '/dashboard.html'; // Replace with your destination page
        } else {
            // If login fails, show an error message
            alert('Login failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred: ' + error.message);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is logged in by checking for the accessToken in localStorage
    const token = localStorage.getItem('accessToken');
    
    if (token) {
        // If token exists, display the edit button
        document.getElementById('edit-button-container').style.display = 'block';
    }
});


