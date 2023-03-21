package com.eshop.eShopbackend.webServices;

import com.eshop.eShopbackend.model.RestResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component("restWebService")
@Slf4j
public class RestWebServiceImpl implements RestWebService {

    private final RestTemplate restTemplate;

    public RestWebServiceImpl() {
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(10_000);
        factory.setReadTimeout(10_000);
        this.restTemplate = new RestTemplate(factory);
    }

    @Override
    public void callRestClient(String code) {
        try {
            RestResponse result = restTemplate.getForObject("https://reqres.in/api/users/{code}", RestResponse.class, code);
            System.out.println(result);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }
}
