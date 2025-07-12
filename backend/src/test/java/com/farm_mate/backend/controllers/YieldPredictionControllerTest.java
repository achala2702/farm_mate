package com.farm_mate.backend.controllers;

import com.farm_mate.backend.dto.YieldDto;
import com.farm_mate.backend.services.YieldPredictionService;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class YieldPredictionControllerTest {

    @Mock
    private YieldPredictionService yieldPredictionService;

    @InjectMocks
    private YieldPredictionController yieldPredictionController;

    //dto
    YieldDto dto = new YieldDto();

    @Test
    void testYieldPredictionOk() {
        dto.setCropType("Tomato");
        dto.setDistrict("Colombo");
        dto.setArea(1);
        dto.setSeason("Yala");

        when(yieldPredictionService.predictYield(any())).thenReturn("OK");

        ResponseEntity<String> response = yieldPredictionController.YieldPrediction(dto);

        assertEquals("OK", response.getBody());
    }

    @Test
    void testYieldPredictionBadRequest() {

        dto.setCropType("");
        dto.setDistrict("Colombo");
        dto.setArea(1);
        dto.setSeason("Yala");

        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        Set<ConstraintViolation<YieldDto>> violations = validator.validate(dto);

        assertFalse(violations.isEmpty());
    }
}