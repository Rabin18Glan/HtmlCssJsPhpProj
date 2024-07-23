
document.getElementById('logout').addEventListener('click', function() {
   
     // Send the form data to the server using Fetch API
     fetch('./login.php', {
         method: 'GET',
       
     })
     .then(response => {
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return response.json(); // Parse the JSON from the response
     })
     .then(data => {
         if (data.status === 'success') {
             console.log(data.message);
             // Redirect to a protected page or fetch user session data
             window.location.href = '../login/login.html'; // Example redirect
         } else {
             console.error(data.message);
             // Display error message to the user

         }
     })
     .catch(error => {
         console.error('Error:', error);
         // Handle any errors that occurred during the fetch

     });
 });
 