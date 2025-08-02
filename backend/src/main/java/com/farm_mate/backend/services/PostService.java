package com.farm_mate.backend.services;

import com.farm_mate.backend.dto.AddPostDto;
import com.farm_mate.backend.dto.AuthorDto;
import com.farm_mate.backend.dto.GetPostsResponseDto;
import com.farm_mate.backend.dto.PostDto;
import com.farm_mate.backend.entities.PostEntity;
import com.farm_mate.backend.entities.UserEntity;
import com.farm_mate.backend.exceptions.PostNotFoundException;
import com.farm_mate.backend.exceptions.UserNotFoundException;
import com.farm_mate.backend.repositories.PostRepository;
import com.farm_mate.backend.repositories.UserRepository;
import com.farm_mate.backend.utils.CurrentUserProvider;
import com.farm_mate.backend.utils.PostMapper;
import com.farm_mate.backend.utils.UserMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public PostService(PostRepository postRepository, UserRepository userRepository, UserMapper userMapper) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public Map<String, String> createPost(AddPostDto postDto) {
        String currentUserEmail = CurrentUserProvider.getCurrentUsersEmail();
        String imageUrl = null;

        if(postDto.getImage() != null){
            MultipartFile image = postDto.getImage();
            String uploadDir = "uploads/images";

            try {
                //create the folder if not exist
                Path uploadPath = Paths.get(uploadDir);
                if(!Files.exists(uploadPath)){
                    Files.createDirectories(uploadPath);
                    System.out.println("Working directory: " + System.getProperty("user.dir"));
                }
                //creating a unique name for image
                String uniqueImageName = UUID.randomUUID() + image.getOriginalFilename();

                //save image to the folder
                Path imagePath = uploadPath.resolve(uniqueImageName);
                Files.copy(image.getInputStream(), imagePath, StandardCopyOption.REPLACE_EXISTING);

                imageUrl=imagePath.toString();

            } catch (IOException e) {
                throw new RuntimeException("Failed to save image in server");
            }
        }
        UserEntity postAuthor = userRepository.findByEmail(currentUserEmail).orElseThrow(()->new UserNotFoundException("No account found with the provided email address."));
        PostEntity post = PostMapper.mapToPostEntity(postDto, postAuthor,imageUrl);
        postRepository.save(post);
        return Map.of("message", "post created");
    }

    public GetPostsResponseDto getPosts(int pageNumber, int size) {
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by("createdAt").descending());
        Page<PostEntity> postEntities = postRepository.findAll(pageable);

        List<PostDto> postDtos = new ArrayList<>();
        String baseUrl = ServletUriComponentsBuilder.fromCurrentContextPath().build().toString();

        for (PostEntity post : postEntities) {
            String imageUrl = null;
            if (post.getImage() != null) {
                String uniqueImageName = Paths.get(post.getImage()).getFileName().toString();
                imageUrl = baseUrl + "/images/" + uniqueImageName;
            }

            AuthorDto author = userMapper.mapToAuthorDto(post.getPostAuthor());
            PostDto postDto = PostMapper.mapToPostDto(post, author, imageUrl);
            postDtos.add(postDto);
        }

        return new GetPostsResponseDto(postDtos, pageNumber, postEntities.hasNext(), postEntities.hasNext()? pageNumber+1 : pageNumber);
    }


    public PostDto getPostById(Integer id) {

        PostEntity post  = postRepository.findById(id).orElseThrow(()->new PostNotFoundException("the post related to this id is not found"));
        AuthorDto author = userMapper.mapToAuthorDto(post.getPostAuthor());

        String baseUrl = ServletUriComponentsBuilder.fromCurrentContextPath().build().toString();
        String imageUri = null;

        if(post.getImage()!= null) {
            imageUri = baseUrl + "/images/" + Paths.get(post.getImage()).getFileName().toString();
        }

        return PostMapper.mapToPostDto(post, author, imageUri);
    }
}
