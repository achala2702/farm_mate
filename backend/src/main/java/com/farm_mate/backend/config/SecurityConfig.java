package com.farm_mate.backend.config;

import com.farm_mate.backend.entities.UserEntity;
import com.farm_mate.backend.repositories.UserRepository;
import com.farm_mate.backend.utils.JwtUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseCookie;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.time.Duration;
import java.util.UUID;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final CustomJwtFilter customJwtFilter;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;

    public SecurityConfig(CustomJwtFilter customJwtFilter, JwtUtil jwtUtil, UserRepository userRepository) {
        this.customJwtFilter = customJwtFilter;
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        httpSecurity.csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(request-> request.requestMatchers("/yield-prediction", "/disease-detection", "/auth/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/posts/get-post/**", "/posts/get-posts", "/images/**").permitAll()
                        .anyRequest().authenticated())
                .oauth2Login(oauth2->oauth2.successHandler((request, response, authentication)->{
                    //get oauth2 user details
                    OAuth2User user = (OAuth2User) authentication.getPrincipal();
                    String email = user.getAttribute("email");
                    String name = user.getAttribute("name");

                    System.out.println(name);

                    boolean isExists = userRepository.existsByEmail(email);

                    if(!isExists) {

                        String firstName = "";
                        String lastName = "";
                        assert name != null;
                        String[] parts = name.trim().split(" ", 2);
                        firstName = parts[0];
                        if(parts.length>1) {
                            lastName = parts[1];
                        }

                        UserEntity newUser = new UserEntity();
                        newUser.setEmail(email);
                        newUser.setFirstName(firstName);
                        newUser.setLastName(lastName);
                        newUser.setPassword(UUID.randomUUID().toString());

                        userRepository.save(newUser);

                    }

                    String token = jwtUtil.generateJwt(email);

                    ResponseCookie cookie = ResponseCookie.from("jwt", token)
                            .httpOnly(true)
                            .secure(false)
                            .path("/")
                            .maxAge(Duration.ofHours(1))
                            .sameSite("Lax")
                            .build();

                    response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
                    response.sendRedirect("http://localhost:3000/forum");

                }))
                .sessionManagement(httpSecuritySessionManagementConfigurer -> httpSecuritySessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .httpBasic(Customizer.withDefaults()).addFilterBefore(customJwtFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
