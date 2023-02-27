package com.eshop.eShopbackend.services;

import com.eshop.eShopbackend.model.Product;
import com.eshop.eShopbackend.model.ProductDto;
import com.eshop.eShopbackend.repositories.ProductRepository;
import com.eshop.eShopbackend.utils.CoreConstants;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public List<ProductDto> getAllProducts() {
        return mapToDto(productRepository.getAllProducts());
    }

    @Override
    public String createProduct(ProductDto productDto) {
        log.info(productDto.toString());//TODO pasidaryt mappinima i entity ir save i db
        return "success";
    }

    private List<ProductDto> mapToDto(Collection<Product> entities) {
        return entities.stream()
                .map(o -> ProductDto.builder()
                        .name(o.getName())
                        .description(o.getDescription())
                        .price(o.getPrice())
                        .createDate(o.getCreateDate().format(CoreConstants.DATE_TIME_FORMATTER))
                        .build())
                .collect(Collectors.toList());

        //TODO FOR REFERENCE
//        List<ProductDto> result = new ArrayList<>();
//        for (Product product : entities) {
//
//            ProductDto dataTransferObj = new ProductDto();
//            dataTransferObj.setName(product.getName());
//            dataTransferObj.setUniqueId(product.getUniqueId());
//            dataTransferObj.setPrice(product.getPrice());
//
//            result.add(dataTransferObj);
//
//        }
//        return result;
    }
}
