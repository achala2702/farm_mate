package com.farm_mate.backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class DiseaseDetectionService {

    public String detectDisease(MultipartFile image) {
        return "detected disease";
    }
}
