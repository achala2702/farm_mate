package com.farm_mate.backend.dto;

import com.farm_mate.backend.dto.enums.CropType;
import com.farm_mate.backend.dto.enums.District;
import com.farm_mate.backend.dto.enums.Season;

public class YieldResponseDto {

    private CropType cropType;
    private District district;
    private float area;
    private Season season;
    private double prediction;

    public District getDistrict() {
        return district;
    }

    public void setDistrict(District district) {
        this.district = district;
    }

    public CropType getCropType() {
        return cropType;
    }

    public void setCropType(CropType cropType) {
        this.cropType = cropType;
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

    public double getPrediction() {
        return prediction;
    }

    public void setPrediction(double prediction) {
        this.prediction = prediction;
    }
}
