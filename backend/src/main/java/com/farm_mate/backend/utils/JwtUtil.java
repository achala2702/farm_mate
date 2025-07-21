package com.farm_mate.backend.utils;

import com.farm_mate.backend.dto.UserLoginDto;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String jwtSecret;
    private Key jwtKey;

    //making a key from secret after components mount and di
    @PostConstruct
    public void init() {
        if(jwtSecret == null|| jwtSecret.isBlank()){
            throw new RuntimeException("JWT Secret is empty");
        }
        jwtKey = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    //generate jwt
    public String generateJwt(UserLoginDto userLoginDto){
        String email = userLoginDto.getEmail();
        Date currentDate = new Date();
        Date expirationDate = new Date(currentDate.getTime() + 15 * 60 * 1000);

        return Jwts.builder().subject(email).issuedAt(currentDate).expiration(expirationDate).signWith(jwtKey).compact();

    }
}
