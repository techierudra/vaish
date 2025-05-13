package com.ECRH_MAJOR2.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ECRH_MAJOR2.backend.exception.UserNotFoundException;
import com.ECRH_MAJOR2.backend.model.User;
import com.ECRH_MAJOR2.backend.repository.UserRepository;

import java.security.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user") //add new user
    User newUser(@RequestBody User newUser) {
    	newUser.setRegistrationDate(java.sql.Timestamp.valueOf(LocalDateTime.now()));
        return userRepository.save(newUser);
    }



    @GetMapping("/users") //list all user data
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/identifier/{id}") //view user data
    User getUserByIdentifier(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }


    @PutMapping("/user/identifier/{id}")  //update user data
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                	
                	user.setAddress(newUser.getAddress());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setDob(newUser.getDob());
                    user.setDocumentDetails(newUser.getDocumentDetails());
                    user.setDocumentType(newUser.getDocumentType());
                    user.setPassword(newUser.getPassword());
                    user.setPhone(newUser.getPhone());	
//                    user.setRegistrationDate(newUser.getRegistrationDate());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }
 
    @DeleteMapping("/user/identifier/{id}") //delete user data
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }
    
    @GetMapping("/user/{email}")
    public User loginCheck(@PathVariable String email) {
    	return userRepository.findByEmail(email);
    }




}
