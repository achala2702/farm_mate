package com.farm_mate.backend.controllers;

import com.farm_mate.backend.services.DiseaseDetectionService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DiseaseDetectionController {

    private final DiseaseDetectionService diseaseDetectionService;

    public DiseaseDetectionController(DiseaseDetectionService diseaseDetectionService) {
        this.diseaseDetectionService = diseaseDetectionService;
    }

    @PostMapping("/disease-detection")
    public String diseaseDetection() {
        return diseaseDetectionService.detectDisease();
    }
}