package com.eshop.eShopbackend.controllers;

import com.eshop.eShopbackend.controllers.dto.LoginRequest;
import com.eshop.eShopbackend.controllers.dto.LoginResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest);
        return null;
    }
}
