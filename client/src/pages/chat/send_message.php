<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = htmlspecialchars($_POST['message']);
    
    $xml = simplexml_load_file('messages.xml');
    $newMessage = $xml->addChild('message', $message);
    
    $xml->asXML('messages.xml');
}
