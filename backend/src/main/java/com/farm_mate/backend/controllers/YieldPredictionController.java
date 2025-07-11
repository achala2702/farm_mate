package com.farm_mate.backend.controllers;

import com.farm_mate.backend.services.YieldPredictionService;
import org.springframework.web.bind.annotation.PostMapping;
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
    public String YieldPrediction() {
        return yieldPredictionService.predictYield();
    }
}
