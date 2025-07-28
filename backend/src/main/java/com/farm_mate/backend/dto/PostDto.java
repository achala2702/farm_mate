package com.farm_mate.backend.dto;

import com.farm_mate.backend.entities.CommentEntity;

import java.util.List;

public class PostDto {

    private final Integer postId;
    private final String title;
    private final String category;
    private final String content;
    private final Integer votes;
    private final String imageUrl;
    private final AuthorDto postAuthor;
    private final List<CommentEntity> comments;

    public PostDto(Integer postId, String title, String category, String content, Integer votes, String imageUrl, AuthorDto postAuthor, List<CommentEntity> comments) {
        this.postId = postId;
        this.title = title;
        this.category = category;
        this.content = content;
        this.votes = votes;
        this.imageUrl = imageUrl;
        this.postAuthor = postAuthor;
        this.comments = comments;
    }

    public Integer getPostId() {
        return postId;
    }

    public String getTitle() {
        return title;
    }

    public String getCategory() {
        return category;
    }

    public String getContent() {
        return content;
    }

    public Integer getVotes() {
        return votes;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public AuthorDto getPostAuthor() {
        return postAuthor;
    }

    public List<CommentEntity> getComments() {
        return comments;
    }
}
