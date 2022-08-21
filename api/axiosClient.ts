import axios from "axios";
import { AppConfig } from "./../appConfig";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000",
});

export default axiosClient;
