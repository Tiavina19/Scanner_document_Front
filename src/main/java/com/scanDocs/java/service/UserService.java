package com.scanDocs.java.service;

import com.scanDocs.java.model.User;
import com.scanDocs.java.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void signUp(User user) {
        // Vérifiez si l'utilisateur existe déjà
        if (userRepository.findByUsername(user.getUsername()) == null) {
            userRepository.save(user);
        } else {
            // Gérez le cas où l'utilisateur existe déjà
            throw new RuntimeException("Username already exists");
        }
    }

    public User signIn(String username, String password) {
        User user = userRepository.findByUsername(username);
        // Vérifiez si l'utilisateur existe et si le mot de passe est correct
        if (user != null && user.getPassword().equals(password)) {
            return user;
        } else {
            // Gérez le cas où l'authentification a échoué
            throw new RuntimeException("Authentication failed");
        }
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
