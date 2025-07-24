package com.farm_mate.backend.dto;

import com.farm_mate.backend.entities.CommentEntity;

import java.util.ArrayList;
import java.util.List;

public class AuthorDto {

    private final Integer authorId;
    private final String authorEmail;
    private final String authorFirstName;
    private final String authorLastName;

    public AuthorDto(Integer authorId, String authorEmail, String authorFirstName, String authorLastName) {
        this.authorId = authorId;
        this.authorEmail = authorEmail;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName;
    }

    public Integer getAuthorId() {
        return authorId;
    }

    public String getAuthorEmail() {
        return authorEmail;
    }

    public String getAuthorFirstName() {
        return authorFirstName;
    }

    public String getAuthorLastName() {
        return authorLastName;
    }
}
