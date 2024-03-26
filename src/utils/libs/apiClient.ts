import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_API,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 403) {
      try {
        await axios.get(`${import.meta.env.VITE_CLIENT_API}/auth/refresh`);
        return axios.request(error.config);
      } catch (refreshError) {
        window.location.href = '/signin';
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
