package com.farm_mate.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

public class YieldDto {

    @NotBlank(message = "Crop Type is Required")
    private String cropType;
    @NotBlank(message = "district is Required")
    private String district;
    @Positive(message = "Area must be positive")
    private float area;
    @NotBlank(message = "Season is Required")
    private String season;

    public String getCropType() {
        return cropType;
    }

    public void setCropType(String cropType) {
        this.cropType = cropType;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public float getArea() {
        return area;
    }

    public void setArea(float area) {
        this.area = area;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }
}
