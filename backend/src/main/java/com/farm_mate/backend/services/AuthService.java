package com.farm_mate.backend.services;

import com.farm_mate.backend.dto.UserRegistrationDto;
import com.farm_mate.backend.entities.UserEntity;
import com.farm_mate.backend.exceptions.UserAlreadyExistsException;
import com.farm_mate.backend.repositories.UserRepository;
import com.farm_mate.backend.utils.UserMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public AuthService(UserRepository userRepository, UserMapper userMapper){
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public String userRegistration(UserRegistrationDto userRegistrationDto) {

        //checking for existing user
        Optional<UserEntity> existingUser = userRepository.findByEmail(userRegistrationDto.getEmail());
        if(existingUser.isPresent()){
            throw new UserAlreadyExistsException("User with email " + userRegistrationDto.getEmail() + " already exists.");
        }

        //adding new user
        UserEntity user = userMapper.mapToUserEntity(userRegistrationDto);
        UserEntity savedUser = userRepository.save(user);
        if(savedUser.getId() != null){
            return "Registration successful: " + savedUser.getEmail();
        }else{
            throw new RuntimeException("User Registration Failed!");
        }
    }
}
