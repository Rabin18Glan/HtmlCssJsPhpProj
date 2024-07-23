const responseDiv = document.getElementById('response');

document.getElementById('registerform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);

    fetch('./register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // Read the response as text
    .then(message => {
        if (message === "Successful") {
            console.log("Registration successful");
            // Redirect to a login page or another page
            window.location.href = '../login/login.html'; // Example redirect
        } else {
            console.error(message);
            // Display error message to the user
            responseDiv.innerHTML = message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occurred during the fetch
        responseDiv.innerHTML =error.message;
    });
});
