package com.farm_mate.backend.services;

import com.farm_mate.backend.dto.UserLoginDto;
import com.farm_mate.backend.dto.UserLoginResponseDto;
import com.farm_mate.backend.dto.UserRegistrationDto;
import com.farm_mate.backend.entities.UserEntity;
import com.farm_mate.backend.exceptions.UserAlreadyExistsException;
import com.farm_mate.backend.exceptions.UserNotFoundException;
import com.farm_mate.backend.repositories.UserRepository;
import com.farm_mate.backend.utils.JwtUtil;
import com.farm_mate.backend.utils.UserMapper;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository, UserMapper userMapper, JwtUtil jwtUtil){
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.jwtUtil = jwtUtil;
    }

    public String userRegistration(UserRegistrationDto userRegistrationDto) {

        //checking for existing user
        if(userRepository.existsByEmail(userRegistrationDto.getEmail())){
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

    public UserLoginResponseDto userLoginService(UserLoginDto userLoginDto, HttpServletResponse response) {

        //checking and getting user details from db
        UserEntity user = userRepository.findByEmail(userLoginDto.getEmail()).orElseThrow(()-> new UserNotFoundException("No account found with the provided email address."));

        //generating a token if user found in db
        String token = jwtUtil.generateJwt(userLoginDto.getEmail());

        //creating an http only cookie
        ResponseCookie cookie = ResponseCookie.from("jwt", token)
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(Duration.ofHours(1))
                .sameSite("Lax")
                .build();

        //adding the cookie to response
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());

        //returning user response with all details
        return new UserLoginResponseDto(user.getEmail(), user.getFirstName(), user.getLastName());
    }

    public String userLogoutService(HttpServletResponse response) {
        response.addHeader(HttpHeaders.SET_COOKIE, ResponseCookie.from("jwt", "")
                        .httpOnly(true)
                        .secure(false)
                        .path("/")
                        .maxAge(0)
                .build().toString()
        );
        return "User Log out successfully!";
    }
}
