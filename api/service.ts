import axiosClient from "./axiosClient";
import { AppConfig } from "./../appConfig";
import { PostDTO } from "./../Components/Item/post.dto";
const baseUrl = AppConfig.api;
export const BlogService = {
  getPosts: () => {
    return axiosClient.get(`${baseUrl}/posts`);
  },
  getPost: (id: any) => {
    return axiosClient.get(`${baseUrl}/posts/${id}`);
  },
  createPost: (post: PostDTO) => {
    return axiosClient.post(`${baseUrl}/posts`, post);
  },
};
