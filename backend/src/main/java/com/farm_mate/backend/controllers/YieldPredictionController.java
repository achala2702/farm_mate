package com.farm_mate.backend.controllers;

import com.farm_mate.backend.dto.YieldDto;
import com.farm_mate.backend.services.YieldPredictionService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class YieldPredictionController {

    private final YieldPredictionService yieldPredictionService;

    public YieldPredictionController(YieldPredictionService yieldPredictionService) {
        this.yieldPredictionService=yieldPredictionService;
    }

    @PostMapping("/yield-prediction")
    public ResponseEntity<String> YieldPrediction(@Valid @RequestBody YieldDto dto) {
        String result = yieldPredictionService.predictYield(dto);
        return ResponseEntity.ok(result);
    }
}
