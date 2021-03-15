import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.1.9:7000/",
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
