package com.eshop.eShopbackend.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class Role implements GrantedAuthority {

    private static final String SPRING_SECURITY_AUTHORITY_PREFIX = "ROLE_";

    @Id
    private String name;

    @Override
    public String getAuthority() {
        return SPRING_SECURITY_AUTHORITY_PREFIX + name;
    }
}
