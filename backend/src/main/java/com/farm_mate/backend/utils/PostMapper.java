package com.farm_mate.backend.utils;

import com.farm_mate.backend.dto.AddPostDto;
import com.farm_mate.backend.dto.AuthorDto;
import com.farm_mate.backend.dto.PostDto;
import com.farm_mate.backend.entities.PostEntity;
import com.farm_mate.backend.entities.UserEntity;

public class PostMapper {

    public static PostEntity mapToPostEntity(AddPostDto postDto, UserEntity userEntity, String imageUrl) {
        PostEntity postEntity = new PostEntity();

        postEntity.setPostAuthor(userEntity);
        postEntity.setCategory(postDto.getCategory());
        postEntity.setContent(postDto.getContent());
        postEntity.setImage(imageUrl);
        postEntity.setTitle(postDto.getTitle());

        return postEntity;
    }

    //map post entity to postDto
    public static PostDto mapToPostDto(PostEntity postEntity, AuthorDto authorDto, String imageUrl) {

        return new PostDto(postEntity.getId(), postEntity.getTitle(), postEntity.getCategory(), postEntity.getContent(), postEntity.getVotes(), imageUrl, authorDto, postEntity.getComments(), postEntity.getCreatedAt());
    }
}
