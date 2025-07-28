package com.farm_mate.backend.controllers;

import com.farm_mate.backend.dto.AddPostDto;
import com.farm_mate.backend.dto.PostDto;
import com.farm_mate.backend.services.PostService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> addPost(@Valid @ModelAttribute AddPostDto postDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(postService.createPost(postDto));
    }

    @GetMapping("/get-posts")
    public ResponseEntity<List<PostDto>> getAllPosts(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "5") int size) {
        return ResponseEntity.status(HttpStatus.OK).body(postService.getPosts(page, size));
    }
}
