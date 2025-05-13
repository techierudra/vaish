package com.ECRH_MAJOR2.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ECRH_MAJOR2.backend.exception.UserNotFoundException;
import com.ECRH_MAJOR2.backend.model.User;
import com.ECRH_MAJOR2.backend.repository.UserRepository;

import java.security.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

import javax.servlet.http.HttpSession;


@RestController
@CrossOrigin("http://localhost:3000")
public class UserLoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user, HttpSession session) {
        String email = user.getEmail();
        String password = user.getPassword();

        try {
            User user1 = userRepository.findByEmailAndPassword(email, password);
            if (user1 != null) {
            	System.out.println("Session ID: " + session.getId());
            	System.out.println("Session user_email ID: " + session.getAttribute("user_email"));

                session.setAttribute("session_username", user1.getName());
                session.setAttribute("user_email", user1.getEmail());
                
                System.out.println("Session user_email ID after setting: " + session.getAttribute("user_email")); // Debug statement
                return ResponseEntity.ok("Login successful");

            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email and password do not match.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while processing your request.");
        }
    }
    
    

   
    @GetMapping("/useremail")
    public ResponseEntity<?> getUserEmail(HttpSession session) {
        System.out.println("Session ID: " + session.getId());
        String userEmail = (String) session.getAttribute("user_email");
        System.out.println("Session Email: " + userEmail);
        if (userEmail != null) {
            return ResponseEntity.ok(Collections.singletonMap("email", userEmail));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User email not found in session.");
        }
    }


    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Logout successful");
    }

    
}
