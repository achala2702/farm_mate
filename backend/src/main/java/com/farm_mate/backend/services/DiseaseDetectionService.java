package com.farm_mate.backend.services;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpHeaders;

@Service
public class DiseaseDetectionService {

    public String detectDisease(MultipartFile image) throws Exception {

        //convert image to a byte array
        byte[] imageBytes = image.getBytes();

        //wrap byte array in a byte array resource
        ByteArrayResource byteArrayResource = new ByteArrayResource(imageBytes) {

            //created this as flask is not read the files without file name
            @Override
            public String getFilename() {
                return image.getOriginalFilename();
            }
        };

        //create headers for multipart image
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        //create the body of the request
        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("image", byteArrayResource);

        //sending the request to flask server
        ResponseEntity<String> response = new RestTemplate().postForEntity("http://127.0.0.1:5000/disease-detection", new HttpEntity<>(body, headers), String.class);

        return response.getBody();
    }
}
