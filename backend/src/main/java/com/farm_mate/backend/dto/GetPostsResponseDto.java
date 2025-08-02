package com.farm_mate.backend.dto;

import java.util.List;

public record GetPostsResponseDto(
        List<PostDto> posts,
        int currentPage,
        boolean hasNextPage,
        int nextPage
) {
}
