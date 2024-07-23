document.addEventListener('DOMContentLoaded', function() {

const current =document.getElementById('current-chat-user');
    const userList = document.getElementById('user-list');
const userInfo = document.getElementById('user-info');
  async  function fetchUsers(){
    await  fetch('./users/fetchUser.php', {
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
 //logic for what to show after getting results
 const users= data.users;
   for(i=0;i<users.length;i++)
{
    const div = document.createElement('div');
    div.className = 'list-user cursor-pointer '
 div.innerHTML = `
<div class="avatar font-bold flex items-center justify-center"> ${users[i].username[i].toUpperCase()}</div>
 <div class="list-user-detail">
  <h2 class='font-semibold'>${users[i].username}</h2>
 </div>

`;

div.addEventListener('click',()=>{
    div.className = 'list-user-now';
current.innerHTML= `${users[i].username}`
})





userList.appendChild(div);
}

   

        } else {
            console.error(data.message);
            // Display error message to the user
            responseDiv.innerHTML = 'Error: ' + data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occurred during the fetch
        responseDiv.innerHTML = 'Error: ' + error.message;
    });

    }

fetchUsers();

//     // Load every 3 seconds
   
});