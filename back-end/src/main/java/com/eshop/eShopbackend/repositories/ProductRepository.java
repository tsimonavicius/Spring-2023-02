package com.eshop.eShopbackend.repositories;

import com.eshop.eShopbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT p FROM Product p ORDER BY p.price DESC")
    List<Product> getAllProducts();

}
