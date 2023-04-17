package org.example.service;

import org.example.dto.LoginDTO;
import org.example.dto.UserDTO;
import org.example.model.User;
import org.example.response.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse addUser(UserDTO userDTO);

    public User saveUser(User user);

    UserResponse loginUser(LoginDTO loginDTO);

    public List<User> getAllUsers();

}
