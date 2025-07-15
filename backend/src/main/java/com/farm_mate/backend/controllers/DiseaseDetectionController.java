package com.farm_mate.backend.controllers;

import com.farm_mate.backend.services.DiseaseDetectionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class DiseaseDetectionController {

    private final DiseaseDetectionService diseaseDetectionService;

    public DiseaseDetectionController(DiseaseDetectionService diseaseDetectionService) {
        this.diseaseDetectionService = diseaseDetectionService;
    }

    @PostMapping("/disease-detection")
    public ResponseEntity<String> diseaseDetection(@RequestParam("image") MultipartFile image) throws Exception {
        String result = diseaseDetectionService.detectDisease(image);
        return ResponseEntity.ok(result);
    }
}