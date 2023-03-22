package com.eshop.eShopbackend.configuration;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties(prefix = "eshop.jwt")
public class JwtProperties {
    private long validTimeInSeconds;
    private String secretKey;

    public long getValidTimeInMillis() {
        return validTimeInSeconds * 1000;
    }

    public byte[] getSecretKeyAsBytes() {
        return secretKey.getBytes();
    }
}
