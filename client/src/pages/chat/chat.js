document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messagesDiv = document.getElementById('messages');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = messageInput.value;

        // Send the message using AJAX
        const xhr = new XMLHttpRequest();
        xhr.open('POST', './chat.php', true);
        // method,path,isAsync? 
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                messageInput.value = '';
                loadMessages();
            }
        };
        xhr.send('message=' + encodeURIComponent(message));
    });

    function loadMessages() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'get_messages.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                const messagesXML = xhr.responseXML;
                const messages = messagesXML.getElementsByTagName('message');
                messagesDiv.innerHTML = '';
                for (let i = 0; i < messages.length; i++) {
                    const text = messages[i].textContent;
                    const messageElement = document.createElement('div');
                    messageElement.textContent = text;
                    messagesDiv.appendChild(messageElement);
                }
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
            }
        };
        xhr.send();
    }

    // Load messages initially
    loadMessages();

    // Load messages every 3 seconds
    setInterval(loadMessages, 3000);
});
