package com.eshop.eShopbackend.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
@Setter
public class ResponseData {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("email")
    private String email;

    @JsonAlias({"first_name", "firstName"})
    private String firstName;

    @JsonAlias({"last_name", "lastName"})
    private String lastName;

    @JsonProperty("avatar")
    private String avatar;

}
