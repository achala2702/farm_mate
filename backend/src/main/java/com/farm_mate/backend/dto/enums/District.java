package com.farm_mate.backend.dto.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum District {
    Colombo, Gampaha, Kaluthara, Kandy, Matale, Nuwara_Eliya, Galle, Matara, Hanbantota, Jaffna, Mannar, Vavuniya, Mullativu, Batticaloa, Ampara, Trincomalee, Kurunegala, Puttalam, Anuradhapura, Polonnaruwa, Badulla, Ratnapura, Monaragala, Kegalla;

    //replacing " " with "_" from enum check
    @JsonCreator
    public static District fromString(String district) {
        return District.valueOf(district.replace(" ", "_"));
    }

    //replacing "_" with " " as ml model wants with spaces
    @JsonValue
    public String toJson() {
        return this.name().replace("_", " ");
    }
}
