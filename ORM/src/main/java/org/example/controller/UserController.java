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
    public ResponseEntity<?> saveUser(@RequestBody UserDTO userDTO) throws MessagingException {
        UserResponse registrationResponse = userService.addUser(userDTO);
               String title = "<html><body>"
                + "<h2>C4 Cinema-e-booking Verification</h2>\n"
                + "<p>" + "Hi, "+ userDTO.getFirstName() + "<p>"+ "We're happy you signed up for C4 Cinema.</p>\n"
                + "<p>Please save the code below to verify and activate your account:</p>" + userDTO.getCode()
                + "<br>"
                + "<p>Thank you.</p>"
                + "</body></html>";
        String text = "C4 Cinema";
        emailService.sendMail(userDTO.getEmail(), title, text);
        return ResponseEntity.ok(registrationResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
        UserResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

}
