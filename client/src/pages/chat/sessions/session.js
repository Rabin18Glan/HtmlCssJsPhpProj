

async function fetchSession(){
    await fetch('./sessions/session.php')
    .then(response => response.json())
    .then(data => {
        if(data.error) {
            console.log(data.error);
        } else {
            console.log('Username:', data.username);
            console.log('Email:', data.email);

            document.getElementById('avatar').innerHTML =data.username[0];

            document.getElementById('name').innerHTML = data.username;
            
            
            // You can now use the session data in your client-side application
        }
    })
    .catch(error => console.error('Error fetching session data:', error));

}

fetchSession();