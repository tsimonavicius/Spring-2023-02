package com.eshop.eShopbackend.services;

import com.eshop.eShopbackend.model.ImageData;
import com.eshop.eShopbackend.model.Product;
import com.eshop.eShopbackend.controllers.dto.ProductDto;
import com.eshop.eShopbackend.repositories.ProductRepository;
import com.eshop.eShopbackend.utils.CoreConstants;
import com.eshop.eShopbackend.webServices.RestWebService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductServiceImpl implements ProductService {

    private static final String USER_CODE = "2";

    private final ProductRepository productRepository;
    private final RestWebService restWebService;

    @Override
    public List<ProductDto> getAllProducts() {
        restWebService.callRestClient(USER_CODE);
        return mapToDto(productRepository.getAllProducts());
    }

    @Override
    public String createProduct(ProductDto productDto) {
        Product newProduct = buildNewProduct(productDto);
        productRepository.save(newProduct);
        return newProduct.getId() != null ? "success" : "failed";
    }

    private Product buildNewProduct(ProductDto productDto) {
        return Product.builder()
                .id(productDto.getId())
                .name(productDto.getName())
                .description(productDto.getDescription())
                .price(productDto.getPrice())
                .imageData(buildNewImageData(productDto.getImageData()))
                .build();
    }

    private ImageData buildNewImageData(byte[] data) {
        return ImageData.builder()
                .data(data)
                .build();
    }

    private List<ProductDto> mapToDto(Collection<Product> entities) {
        return entities.stream()
                .map(o -> ProductDto.builder()
                        .id(o.getId())
                        .name(o.getName())
                        .description(o.getDescription())
                        .price(o.getPrice())
                        .createDate(buildCreateDateLabel(o.getCreateDate()))
                        .build())
                .collect(Collectors.toList());
    }

    private String buildCreateDateLabel(LocalDateTime createDate) {
        LocalDateTime rawDate = Optional.ofNullable(createDate)
                .orElseGet(LocalDateTime::now);

        return rawDate.format(CoreConstants.DATE_TIME_FORMATTER);
    }
}
