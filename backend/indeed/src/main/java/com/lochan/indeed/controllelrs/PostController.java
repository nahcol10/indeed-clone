package com.lochan.indeed.controllers;

import com.lochan.indeed.constants.APIConstants;
import com.lochan.indeed.dto.PostDTO;
import com.lochan.indeed.model.PostModel;
import com.lochan.indeed.service.PostService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin("http://localhost:5173")
public class PostController {

    final PostService postService;

    @PostMapping(APIConstants.SAVE_DATA)
    public PostModel savePost(@Valid @RequestBody PostDTO postDTORequest) {  // Added @RequestBody
        log.info("Saving post ######");
        return this.postService.savePost(postDTORequest);
    }

    @GetMapping(APIConstants.GET_DATA_POSTS)
    public List<PostDTO> getAllPosts() {
        log.info("Getting all posts ######");
        return this.postService.getAllPosts();
    }
}
