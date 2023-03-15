package com.eshop.eShopbackend.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        // Disable CSRF filter
        http
                .csrf().disable();

        // Never create session for security
        http
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // Configure endpoints authorization requirements
        http
                .authorizeRequests()
                .antMatchers(
                        "/products/all",
                        "/login"
                ).permitAll();

        return http.build();
    }
}
