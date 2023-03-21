package com.eshop.eShopbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Getter;
import lombok.Setter;

@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
@Setter
public class RestResponse {

    @JsonProperty("data")
    @JsonDeserialize(contentAs = ResponseData.class)
    private ResponseData responseData;

    @JsonProperty("support")
    private Object support; //not mapped

}
