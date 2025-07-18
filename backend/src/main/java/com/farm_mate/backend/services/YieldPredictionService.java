package com.farm_mate.backend.services;

import com.farm_mate.backend.dto.YieldDto;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class YieldPredictionService {

    public double predictYield (YieldDto dto) {

        //headers for json
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        //sending the request to flask server
        ResponseEntity<JsonNode> response = new RestTemplate().postForEntity("http://127.0.0.1:5000/yield-prediction", new HttpEntity<>(dto, headers), JsonNode.class);

        if(response.getBody() != null && response.getBody().has("prediction")) {
            return response.getBody().get("prediction").asDouble();
        } else {
            throw new RuntimeException("Invalid response from prediction API");
        }
    }
}
