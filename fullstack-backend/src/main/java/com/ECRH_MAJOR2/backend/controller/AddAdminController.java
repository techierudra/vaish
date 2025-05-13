
package com.ECRH_MAJOR2.backend.controller;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ECRH_MAJOR2.backend.model.Admin;
import com.ECRH_MAJOR2.backend.repository.AdminRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class AddAdminController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/admin")
    public ResponseEntity<String> newAdmin(@RequestBody Admin newAdmin) {
    	newAdmin.setRegistrationDate(java.sql.Timestamp.valueOf(LocalDateTime.now()));
        if (adminRepository.existsByEmail(newAdmin.getEmail())) {
            return new ResponseEntity<>("Email already exists", HttpStatus.BAD_REQUEST);
        }
        adminRepository.save(newAdmin);
        return new ResponseEntity<>("Admin created successfully", HttpStatus.OK);
    }

    @GetMapping("/admin/{email}")
    public ResponseEntity<Admin> loginCheck(@PathVariable String email) {
        if (!adminRepository.existsByEmail(email)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Admin admin = adminRepository.findByEmail(email);
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }

}
