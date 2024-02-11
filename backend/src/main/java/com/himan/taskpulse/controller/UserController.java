package com.himan.taskpulse.controller;

import com.himan.taskpulse.model.User;
import com.himan.taskpulse.service.HandleUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/user")
public class UserController {

    //service Bean
    @Autowired
    private final HandleUser handleUser;
    public UserController(HandleUser handleUser) {
        this.handleUser = handleUser;
    }

    @PostMapping("/register")
    public ResponseEntity<Boolean> addUser(@RequestBody User user){
        return ResponseEntity.ok(handleUser.addUser(user));
    }
    @PostMapping("/login")
    public ResponseEntity<Boolean> getUser(@RequestBody User user){
        return ResponseEntity.ok(handleUser.getUser(user));
    }
    @PutMapping("/update-password")
    public ResponseEntity<Boolean> updateUser(@RequestBody User user){
        return ResponseEntity.ok(handleUser.updateUser(user));
    }
    @DeleteMapping("/remove-account")
    public ResponseEntity<Boolean> deleteUser(@RequestBody User user){
        return ResponseEntity.ok(handleUser.removeUser(user));
    }
}
