package com.lochan.indeed.serviceImpl;

import com.lochan.indeed.dao.PostDao;
import com.lochan.indeed.dto.PostDTO;
import com.lochan.indeed.model.PostModel;
import com.lochan.indeed.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostDao postDao;

    @Override
    public PostModel savePost(PostDTO postDTO) {
        PostModel postModel = new PostModel();
        postModel.setProfile(postDTO.getProfile());
        postModel.setDescription(postDTO.getDescription());
        postModel.setSalary(postDTO.getSalary());
        postModel.setType(postDTO.getType());
        postModel.setTechnology(postDTO.getTechnology());
        postModel.setExperience(postDTO.getExperience());
        postDao.save(postModel);
        return postModel;
    }

    @Override
    public List<PostDTO> getAllPosts() {
        List<PostModel> allPostsModel = postDao.findAll();
        List<PostDTO> allPostsDTO = new ArrayList<>();
        allPostsModel.forEach(postModel -> {
            PostDTO postDTO = new PostDTO();
            postDTO.setProfile(postModel.getProfile());
             postDTO.setDescription(postModel.getDescription());
             postDTO.setSalary(postModel.getSalary());
             postDTO.setType(postModel.getType());
             postDTO.setTechnology(postModel.getTechnology());
             postDTO.setExperience(postModel.getExperience());
             allPostsDTO.add(postDTO);
        });
                return allPostsDTO;
    }


}
