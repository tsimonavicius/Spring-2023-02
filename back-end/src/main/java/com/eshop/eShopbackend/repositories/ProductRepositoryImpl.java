package com.eshop.eShopbackend.repositories;

import com.eshop.eShopbackend.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

    @Override
    public List<Product> getAllProducts() {//TODO perjungti i duombaze
        List<Product> result = new ArrayList<>();
        for (int i = 0; i <= 10; i++) {
            result.add(Product.builder()
                    .name("product name number: " + i)
                    .uniqueId(UUID.randomUUID().toString())
                    .price(Math.round(Math.random()) + i)
                    .build());
        }
        return result;
    }
}
