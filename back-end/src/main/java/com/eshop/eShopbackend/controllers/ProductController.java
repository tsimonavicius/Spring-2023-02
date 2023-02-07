package com.eshop.eShopbackend.controllers;

import com.eshop.eShopbackend.model.Product;
import com.eshop.eShopbackend.model.ProductDto;
import com.eshop.eShopbackend.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping("/all")
    public List<ProductDto> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/create")
    public String createProduct(@RequestBody ProductDto product) {
        return productService.createProduct(product);
    }
}
