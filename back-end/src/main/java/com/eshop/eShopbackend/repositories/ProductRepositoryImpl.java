package com.eshop.eShopbackend.repositories;

import com.eshop.eShopbackend.model.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@Deprecated //FOR REFERENCE
@RequiredArgsConstructor
public class ProductRepositoryImpl /*implements ProductRepository*/ {

    private final JdbcTemplate jdbcTemplate;

    public List<Product> getAllProducts() {
//        List<Product> result = new ArrayList<>();
//        for (int i = 0; i <= 10; i++) {
//            result.add(Product.builder()
//                    .name("product name number: " + i)
//                    .uniqueId(UUID.randomUUID().toString())
//                    .price(Math.round(Math.random()) + i)
//                    .build());
//        }

        //atlikti užklausą, naudojant JdbcTemplate mechanizmą.
        String sql = "SELECT * FROM PRODUCT";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Product.class));
    }

    public void save(Product product) {
        //insert into product (id, create_date, description, name, price) values (default, ?, ?, ?, ?)
    }
}
