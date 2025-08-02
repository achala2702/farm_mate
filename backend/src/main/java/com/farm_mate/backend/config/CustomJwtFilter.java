package com.farm_mate.backend.config;

import com.farm_mate.backend.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@Component
public class CustomJwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    public CustomJwtFilter(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        try{
            String jwt=null;
            Cookie[] cookies = request.getCookies();
            if(cookies != null){
                //getting jwt
                for(Cookie cookie: cookies) {
                    if(cookie.getName().equals("jwt")) {
                        jwt = cookie.getValue();
                        break;
                    }
                }

                //validate and getting claims from token
                if(jwt != null) {
                    Claims claims = jwtUtil.validateJwt(jwt);

                    //create an authentication token with the email in token
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(claims.getSubject(), null, Collections.emptyList());
                    //set the authentication for current request so it can pass security
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }
            }
            filterChain.doFilter(request, response);

        }catch(ExpiredJwtException e){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType("application/json");
            response.getWriter().write("{\"error\": \"JWT token is expired\"}");
        } catch (JwtException e) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType("application/json");
            response.getWriter().write("{\"error\": \"Invalid JWT token\"}");
        }
    }
}
