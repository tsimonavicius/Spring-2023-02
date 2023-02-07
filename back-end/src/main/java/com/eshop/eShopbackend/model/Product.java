package com.eshop.eShopbackend.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Product { //TODO padaryti pojo -> entity
    private String name;
    private String uniqueId;
    private Long price;
}
