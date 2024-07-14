<?php
class UserModel {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getUser($username, $password) {
        $query = $this->db->prepare("SELECT * FROM users WHERE username = :username AND password = :password");
        $query->bindParam(':username', $username);
        $query->bindParam(':password', $password);
        $query->execute();
        return $query->fetch(PDO::FETCH_ASSOC);
    }
    
}

