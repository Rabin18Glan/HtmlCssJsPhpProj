function login(e){
    e.event.preventDefault();
    const data = new FormData(e.target);
    const email= data.get('email');
    const password = data.get('password');

   
    // if(user.password!==user.confirmPassword){
    //     console.log("Password did not matched")
    // }
    // else{
    
        
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'login.php', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         document.getElementById('response').innerHTML = xhr.responseText;
    //     }
    // };
    // xhr.send('username=' + email + '&password=' + password);
    
    // }
    
    
    }


    function navigate()
    {
         window.location.href='./../chat/chat.html';

    }