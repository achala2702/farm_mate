package com.farm_mate.backend.services;

import com.farm_mate.backend.dto.YieldDto;
import org.springframework.stereotype.Service;

@Service
public class YieldPredictionService {

    public String predictYield (YieldDto dto) {
        return "predicted Yield count" + dto.getCropType();
    }
}
