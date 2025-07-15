package com.farm_mate.backend.utils;

import org.springframework.http.HttpStatusCode;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

public class ErrorResponseBody {
    public static Map<String, Object> buildErrorResponse(HttpStatusCode status, Object errorDetails) {
        Map<String, Object> response = new HashMap<>();
        response.put("status", status.value());
        response.put("timestamp", LocalDateTime.now());
        response.put("errors", errorDetails);

        return response;
    }
}
