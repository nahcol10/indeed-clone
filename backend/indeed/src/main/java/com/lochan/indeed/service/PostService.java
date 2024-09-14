package com.lochan.indeed.service;

import com.lochan.indeed.dto.PostDTO;
import com.lochan.indeed.model.PostModel;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface PostService {
     public PostModel savePost(PostDTO postDTO);
     public List<PostDTO> getAllPosts();
}
