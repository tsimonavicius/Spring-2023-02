package com.eshop.eShopbackend.controllers;

import com.eshop.eShopbackend.controllers.dto.LoginRequest;
import com.eshop.eShopbackend.controllers.dto.LoginResponse;
import com.eshop.eShopbackend.controllers.dto.UserDto;
import com.eshop.eShopbackend.model.Role;
import com.eshop.eShopbackend.model.User;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.stream.Collectors;

@RestController
public class UserController {

    private final AuthenticationManager authenticationManager;

    public UserController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody @Valid LoginRequest loginRequest) {

        User user = authenticate(loginRequest);

        return new LoginResponse(generateJwt(user), UserDto.builder()
                .name(user.getName())
                .email(user.getEmail())
                .surname(user.getSurname())
                .roles(user.getRoles().stream()
                        .map(Role::getName)
                        .collect(Collectors.toSet()))
                .build());
    }

    private String generateJwt(User user) {
        return null;
    }

    private User authenticate(LoginRequest loginRequest) {
        return (User) authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()))
                .getPrincipal();
    }
}
