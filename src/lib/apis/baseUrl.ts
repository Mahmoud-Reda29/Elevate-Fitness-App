import axios from "axios";
import { JSON_HEADER } from "../constants/api.constant";

const baseURL = "https://fitness.elevateegy.com/api/v1";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    ...JSON_HEADER,
  },
});

export default axiosInstance;
