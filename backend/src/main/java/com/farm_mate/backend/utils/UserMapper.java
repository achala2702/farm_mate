package com.farm_mate.backend.utils;

import com.farm_mate.backend.dto.UserRegistrationDto;
import com.farm_mate.backend.entities.UserEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    private final PasswordEncoder passwordEncoder;

    public UserMapper(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public UserEntity mapToUserEntity(UserRegistrationDto userRegistrationDto) {
        UserEntity userEntity = new UserEntity();

        userEntity.setEmail(userRegistrationDto.getEmail());
        userEntity.setPassword(passwordEncoder.encode(userRegistrationDto.getPassword()));
        userEntity.setFirstName(userRegistrationDto.getFirstName());
        userEntity.setLastName(userRegistrationDto.getLastName());

        return userEntity;
    }
}
