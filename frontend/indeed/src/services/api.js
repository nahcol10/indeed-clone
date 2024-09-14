import axios from "axios";

const API_URL = "http://localhost:8080"; // Backend API URL

// Save a new job post
export const savePost = async (payload) => {
  try {
    return await axios.post(`${API_URL}/post`, payload);
  } catch (error) {
    console.log("Error:", error.message);
    return error.response?.data;
  }
};

// Fetch all job posts
export const getAllPosts = async () => {
  try {
    return await axios.get(`${API_URL}/getAllPost`); // Corrected to GET
  } catch (error) {
    console.log("Error:", error.message);
    return error.response?.data;
  }
};
