package com.eshop.eShopbackend;

import com.eshop.eShopbackend.configuration.JwtProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties(JwtProperties.class)
@SpringBootApplication
public class EShopBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(EShopBackEndApplication.class, args);
	}

}
