package com.farm_mate.backend.dto;

import com.farm_mate.backend.entities.CommentEntity;
import jakarta.validation.constraints.NotBlank;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class PostDto {

    @NotBlank(message = "Title is required")
    private String title;
    private String category;
    private MultipartFile image;
    private String content;
    private Integer votes;
    private String imageUrl;
    private AuthorDto postAuthor;
    private List<CommentEntity> comments;


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public AuthorDto getPostAuthor() {
        return postAuthor;
    }

    public void setPostAuthor(AuthorDto postAuthor) {
        this.postAuthor = postAuthor;
    }

    public Integer getVotes() {
        return votes;
    }

    public void setVotes(Integer votes) {
        this.votes = votes;
    }

    public List<CommentEntity> getComments() {
        return comments;
    }

    public void setComments(List<CommentEntity> comments) {
        this.comments = comments;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
