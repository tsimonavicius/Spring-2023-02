package com.eshop.eShopbackend.controllers.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto { //VIEW
    private Long id;
    private String name;
    private String description;
    private Long price;
    private String createDate;
    private byte[] imageData;
}
