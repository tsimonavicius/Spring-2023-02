package com.eshop.eShopbackend.services;

import com.eshop.eShopbackend.model.ProductDto;

import java.util.List;

public interface ProductService {

    List<ProductDto> getAllProducts();

    String createProduct(ProductDto productDto);

}
