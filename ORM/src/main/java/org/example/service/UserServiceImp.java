package org.example.service;

import org.example.dto.LoginDTO;
import org.example.dto.UserDTO;
import org.example.model.User;
import org.example.repository.UserRepository;
import org.example.response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserResponse addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUserID(),
                userDTO.getFirstName(),
                userDTO.getLastName(),
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword()),
                userDTO.getPhone(),
                userDTO.isEnrolledForPromo(),
                userDTO.getAddress(),
                userDTO.getCity(),
                userDTO.getState(),
                userDTO.getZip(),
                userDTO.isActive()
        );
        User testUser = userRepository.findByEmail(userDTO.getEmail());
        if (testUser == null) {
            //boolean active = !user.isActive();
            userRepository.save(user);
            return new UserResponse("Registration Success", true);
        } else {
            return new UserResponse("Registration Failed", false);
        }

    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public UserResponse loginUser(LoginDTO loginDTO) {
        String message = "";
        User currentUser = userRepository.findByEmail(loginDTO.getEmail());
        if (currentUser != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = currentUser.getPassword();
            Boolean isPasswordCorrect = passwordEncoder.matches(password, encodedPassword);
            if (isPasswordCorrect) {
                Optional<User> user = userRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if(user.isPresent()){
                    return new UserResponse("Login Success", true);
                } else {
                    return new UserResponse("Login Failed", false);
                }
            } else {
                return new UserResponse("Password Does Not Match", false);
            }
        } else {
            return new UserResponse("Email Does Not Exist", false);
        }
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
