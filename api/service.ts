import axiosClient from "./axiosClient";
import { AppConfig } from "./../appConfig";
const baseUrl = AppConfig.api;
export const BlogService = {
  getPosts: () => {
    return axiosClient.get(`${baseUrl}/posts`);
  },
  getPost: (id:any) => {
    return axiosClient.get(`${baseUrl}/posts/${id}`);
  },
};
