package com.eshop.eShopbackend.controllers;

import com.eshop.eShopbackend.model.ProductDto;
import com.eshop.eShopbackend.services.ProductService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
@Api(tags = {"this is a products controller", "with string array description"})
public class ProductController {

    private final ProductService productService;

    @GetMapping("/all")
    public List<ProductDto> getAllProducts() {
        return productService.getAllProducts();
    }

//    @PostMapping("/create")
//    public String createProduct(@RequestBody ProductDto product) {
//        return productService.createProduct(product);
//    }

    @PostMapping("/create")
    public String createProduct(@RequestParam("name") String name,
                                @RequestParam("description") String description,
                                @RequestParam("price") Long price,
                                @RequestParam("imageData") MultipartFile imageData) {
        return productService.createProduct(null);
    }
}
