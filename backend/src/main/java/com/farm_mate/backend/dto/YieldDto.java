package com.farm_mate.backend.dto;

import com.farm_mate.backend.dto.enums.CropType;
import com.farm_mate.backend.dto.enums.District;
import com.farm_mate.backend.dto.enums.Season;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class YieldDto {

    @NotNull(message = "Crop Type is Required")
    private CropType cropType;
    @NotNull(message = "district is Required")
    private District district;
    @Positive(message = "Area must be positive")
    private float area;
    @NotNull(message = "Season is Required")
    private Season season;

    public CropType getCropType() {
        return cropType;
    }

    public void setCropType(CropType cropType) {
        this.cropType = cropType;
    }

    public District getDistrict() {
        return district;
    }

    public void setDistrict(District district) {
        this.district = district;
    }

    public float getArea() {
        return area;
    }

    public void setArea(float area) {
        this.area = area;
    }

    public Season getSeason() {
        return season;
    }

    public void setSeason(Season season) {
        this.season = season;
    }
}
