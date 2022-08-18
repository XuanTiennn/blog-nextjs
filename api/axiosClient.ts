import axios from "axios";
import { AppConfig } from "./../appConfig";

const axiosClient = axios.create({
  baseURL: AppConfig.api,
});

export default axiosClient;
