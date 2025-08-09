package com.farm_mate.backend.controllers;

import com.farm_mate.backend.dto.UserLoginDto;
import com.farm_mate.backend.dto.UserLoginResponseDto;
import com.farm_mate.backend.dto.UserRegistrationDto;
import com.farm_mate.backend.services.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService){
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String,String>> userRegister (@Valid @RequestBody UserRegistrationDto userDto) {
      return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("message",authService.userRegistration(userDto)));
    }

    @PostMapping("/login")
    public ResponseEntity<UserLoginResponseDto> userLogin(@Valid @RequestBody UserLoginDto userLoginDto, HttpServletResponse response) {
        return ResponseEntity.status(HttpStatus.OK).body(authService.userLoginService(userLoginDto, response));
    }

    @GetMapping("/logout")
    public ResponseEntity<String> userLogout(HttpServletResponse response) {
        return ResponseEntity.status(HttpStatus.OK).body(authService.userLogoutService(response));
    }

    @GetMapping("/me")
    public ResponseEntity<UserLoginResponseDto> getUserInfo() {
        return ResponseEntity.status(HttpStatus.OK).body(authService.getUserInfoService());
    }
}
