package com.lochan.indeed.dao;

import com.lochan.indeed.model.PostModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostDao extends MongoRepository<PostModel, String> {
}
