import axiosClient from "./axiosClient";
import { AppConfig } from "./../appConfig";
const baseUrl = AppConfig.api;
console.log(baseUrl);
export const BlogService = {
  getPosts: () => {
    return axiosClient.get(`${baseUrl}/posts`);
  },
};
