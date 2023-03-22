package com.eshop.eShopbackend.controllers;

import com.eshop.eShopbackend.controllers.dto.ProductDto;
import com.eshop.eShopbackend.model.User;
import com.eshop.eShopbackend.services.ProductService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
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

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public String createProduct(@RequestBody ProductDto product, Principal principal,
                                Authentication authentication,
                                @AuthenticationPrincipal User user) {
        SecurityContextHolder.getContext().getAuthentication();
        return productService.createProduct(product);
    }

    @PostMapping("/create")
    public String createProduct(@RequestParam("name") String name,
                                @RequestParam("description") String description,
                                @RequestParam("price") Long price,
                                @RequestParam("imageData") MultipartFile imageData) throws IOException {
        //TODO fileUpload pridet dedikuota endPoint'a ir pakeist onChangeHandler'i
        ProductDto dto = ProductDto.builder()
                .name(name)
                .description(description)
                .price(price)
                .imageData(imageData.getBytes())
                .build();

        return productService.createProduct(dto);
    }
}
