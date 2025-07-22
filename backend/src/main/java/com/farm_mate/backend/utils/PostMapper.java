package com.farm_mate.backend.utils;

import com.farm_mate.backend.dto.PostDto;
import com.farm_mate.backend.entities.PostEntity;
import com.farm_mate.backend.entities.UserEntity;

public class PostMapper {

    public static PostEntity mapToPostEntity(PostDto postDto, UserEntity userEntity, String imageUrl) {
        PostEntity postEntity = new PostEntity();

        postEntity.setPostAuthor(userEntity);
        postEntity.setCategory(postDto.getCategory());
        postEntity.setContent(postDto.getContent());
        postEntity.setImage(imageUrl);
        postEntity.setTitle(postDto.getTitle());

        return postEntity;
    }
}
