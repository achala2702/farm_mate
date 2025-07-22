package com.farm_mate.backend.utils;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class CurrentUserProvider {

    //to get  the current users email provided to authentication object by jwt in filter
    public static String getCurrentUsersEmail() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if(authentication !=null && authentication.isAuthenticated()){
            return authentication.getName();
        }
        return null;
    }
}
