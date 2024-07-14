const message=[
    {
        
        user:'me',
        message:'hello',
  
        
    },
    {
        user:'you',
        message:'Hi! How are you?',
        
    },
    {
        user:'me',
        message:'I am fine',
    

    },
    {
        user:'me',
        message:'What are you doing now?',
    
        
    },
    {
        user:'you',
        message:'Nothing just sitting',
   
        
    },
    {
        user:'you',
        message:'I love you',
   
        
    }
]

const messages = document.getElementById('messages');

message.forEach((message)=>{
    const Message=document.createElement('div'); 
    Message.innerHTML=message.message;
    Message.className = message.user;
    messages.appendChild(Message);

})



function sendMessage(event)
{event.preventDefault();
    const data= new FormData(event.target)
     const message = messageInput.value;
    const Message=document.createElement('div'); 
    Message.innerHTML=data.get('message');
    Message.className = 'me';
    messages.appendChild(Message);
    document.querySelector('#recent-msg').innerHTML = 'you: '+data.get('message')
    e.preventDefault();
   

    // Send the message using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_message.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            messageInput.value = '';
            loadMessages();
        }
    };
    xhr.send('message=' + encodeURIComponent(message));
    event.target.reset()



}






// function sendSmile()
// {
//     Message.innerHTML='😊'
// }

const logout = document.getElementById('logout');
logout.addEventListener('click',()=>{
    window.location.href='./../login/login.html'
})