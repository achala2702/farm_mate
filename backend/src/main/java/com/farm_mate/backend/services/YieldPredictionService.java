package com.farm_mate.backend.services;

import com.farm_mate.backend.dto.YieldDto;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.client.RestTemplate;

@Service
public class YieldPredictionService {

    public String predictYield (YieldDto dto) {

        //headers for json
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        //sending the request to flask server
        ResponseEntity<String> response = new RestTemplate().postForEntity("http://127.0.0.1:5000/yield-prediction", new HttpEntity<>(dto, headers), String.class);
        return response.getBody();
    }
}
