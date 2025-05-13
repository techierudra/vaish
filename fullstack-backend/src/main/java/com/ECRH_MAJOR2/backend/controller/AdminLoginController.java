
package com.ECRH_MAJOR2.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ECRH_MAJOR2.backend.model.Admin;
import com.ECRH_MAJOR2.backend.repository.AdminRepository;
import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminLoginController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/adminlogin")
    public ResponseEntity<?> login(@RequestBody Admin admin, HttpSession session) {
        String email = admin.getEmail();
        String password = admin.getPassword();

        try {
            Admin admin1 = adminRepository.findByEmailAndPassword(email, password);
            if (admin1 != null) {
                // Set admin's name in session
                session.setAttribute("session_username", admin1.getName());
                session.setAttribute("email", admin1.getEmail());
                
                // Return admin's name and a success message as JSON response
                return ResponseEntity.ok().body("{\"adminName\": \"" + admin1.getName() + "\"}");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email and password do not match.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while processing your request.");
        }
    }
}

