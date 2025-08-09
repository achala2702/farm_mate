package com.farm_mate.backend.utils;

import com.farm_mate.backend.dto.UserLoginDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String jwtSecret;
    private SecretKey jwtKey;

    //making a key from secret after components mount and di
    @PostConstruct
    public void init() {
        if(jwtSecret == null|| jwtSecret.isBlank()){
            throw new RuntimeException("JWT Secret is empty");
        }
        jwtKey = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    //generate jwt
    public String generateJwt(String email) {
        Date currentDate = new Date();
        //after 1h
        Date expirationDate = new Date(currentDate.getTime() + 60 * 60 * 1000);

        return Jwts.builder().subject(email).issuedAt(currentDate).expiration(expirationDate).signWith(jwtKey).compact();

    }

    //validate jwt
    public Claims validateJwt(String token) {
        return Jwts.parser().verifyWith(jwtKey).build().parseSignedClaims(token).getPayload();
    }
}
