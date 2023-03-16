package com.eshop.eShopbackend.services;

import com.eshop.eShopbackend.model.Role;
import com.eshop.eShopbackend.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.stream.Collectors;

@Service
public class JwtService {

    private long validTimeInMillis = 30 * 60 * 1000;
    private byte[] secretKey = "ZGMmcFxm9xx3kyIkkK1RTE2gRgqlvVPHwxAkWLIRy+S9WVZkI8uyjtyfnf7HVi/rGefakLdTrxrKGZGZeeYyww==".getBytes();

    public String createToken(User user) {

        Date now = new Date();

        return Jwts.builder()
                .setAudience("eshop-ui")
                .setIssuer("eshop-back-end")
                .setSubject(user.getEmail())
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + validTimeInMillis))
                .claim("roles", user.getRoles().stream()
                        .map(Role::getName)
                        .collect(Collectors.toSet())
                )
                .signWith(Keys.hmacShaKeyFor(secretKey), SignatureAlgorithm.HS512)
                .compact();
    }

}
