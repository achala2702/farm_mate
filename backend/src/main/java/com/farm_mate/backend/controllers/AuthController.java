package com.farm_mate.backend.controllers;

import com.farm_mate.backend.dto.UserRegistrationDto;
import com.farm_mate.backend.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
