package org.example.controller;

import org.example.dto.LoginDTO;
import org.example.dto.UserDTO;
import org.example.model.User;
import org.example.response.UserResponse;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO userDTO){
        UserResponse registrationResponse = userService.addUser(userDTO);
        return ResponseEntity.ok(registrationResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
        UserResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/edit")
    public ResponseEntity<?> editUser(@RequestBody UserDTO userDTO) {
        UserResponse editResponse = userService.editUser(userDTO);
        return ResponseEntity.ok(editResponse);
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

}