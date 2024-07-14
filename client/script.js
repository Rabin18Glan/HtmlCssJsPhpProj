document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('send');

    // Function to load messages
    function loadMessages() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'chat.php?action=fetch');
        xhr.onload = function() {
            if(xhr.status === 200) {
                chatMessages.innerHTML = xhr.responseText;
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        };
        xhr.send();
    }

    // Load messages when page loads
    loadMessages();

    // Function to send message
    function sendMessage() {
        const message = messageInput.value;
        if(message.trim() !== '') {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'chat.php');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                if(xhr.status === 200) {
                    loadMessages();
                    messageInput.value = '';
                }
            };
            xhr.send('action=send&message=' + encodeURIComponent(message));
        }
    }

    // Event listener for send button
    sendButton.addEventListener('click', sendMessage);

    // Poll for new messages every 3 seconds
    setInterval(loadMessages, 3000);
});
