package com.farm_mate.backend.utils;

import com.farm_mate.backend.dto.AuthorDto;
import com.farm_mate.backend.dto.PostDto;
import com.farm_mate.backend.entities.PostEntity;
import com.farm_mate.backend.entities.UserEntity;
import org.springframework.web.multipart.MultipartFile;

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

    //map post entity to postDto
    public static PostDto mapToPostDto(PostEntity postEntity, AuthorDto authorDto, String imageUrl) {

        PostDto postDto = new PostDto();

        postDto.setTitle(postEntity.getTitle());
        postDto.setCategory(postEntity.getCategory());
        postDto.setContent(postEntity.getContent());
        postDto.setImageUrl(imageUrl);
        postDto.setPostAuthor(authorDto);
        postDto.setVotes(postEntity.getVotes());
        postDto.setComments(postEntity.getComments());

        return postDto;
    }
}
