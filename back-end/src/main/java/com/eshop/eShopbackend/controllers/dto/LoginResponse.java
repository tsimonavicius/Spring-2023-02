package com.eshop.eShopbackend.controllers.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
    private String jwt;
    private UserDto userDto;
}
