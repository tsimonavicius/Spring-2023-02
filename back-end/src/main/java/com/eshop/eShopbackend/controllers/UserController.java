package com.eshop.eShopbackend.controllers;

import com.eshop.eShopbackend.controllers.dto.LoginRequest;
import com.eshop.eShopbackend.controllers.dto.LoginResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class UserController {

    private final AuthenticationManager authenticationManager;

    public UserController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody @Valid LoginRequest loginRequest) {

        authenticationManager.authenticate(null);
        System.out.println(loginRequest);
        return null;
    }
}
