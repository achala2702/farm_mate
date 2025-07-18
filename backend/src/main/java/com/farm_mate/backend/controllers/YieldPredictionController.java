package com.farm_mate.backend.controllers;

import com.farm_mate.backend.dto.YieldDto;
import com.farm_mate.backend.dto.YieldResponseDto;
import com.farm_mate.backend.services.YieldPredictionService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class YieldPredictionController {

    private final YieldPredictionService yieldPredictionService;

    public YieldPredictionController(YieldPredictionService yieldPredictionService) {
        this.yieldPredictionService=yieldPredictionService;
    }

    @PostMapping("/yield-prediction")
    public ResponseEntity<YieldResponseDto> YieldPrediction(@Valid @RequestBody YieldDto dto) {
        double result = yieldPredictionService.predictYield(dto);

        //creating a response with all inputs and prediction
        YieldResponseDto response = new YieldResponseDto();

        response.setCropType(dto.getCropType());
        response.setDistrict(dto.getDistrict());
        response.setArea(dto.getArea());
        response.setSeason(dto.getSeason());
        response.setPrediction(result);

        return ResponseEntity.ok(response);
    }
}
