import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_API,
});

let isRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const token = localStorage.getItem('refreshToken');
          const response = await axios.get(`${import.meta.env.VITE_CLIENT_API}/auth/refresh`, {
            headers: {
              'Refresh-Token': `${token}`,
            },
          });
          const accessToken = response.headers['authorization'];
          const refreshToken = response.headers['refresh-token'];
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          originalRequest.headers.Authorization = accessToken;
          refreshSubscribers.forEach((callback) => callback(accessToken));
          refreshSubscribers = [];
          return apiClient(originalRequest);
        } catch (refreshError) {
          window.location.href = '/signin';
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      } else {
        return new Promise((resolve) => {
          refreshSubscribers.push((accessToken) => {
            originalRequest.headers.Authorization = accessToken;
            resolve(apiClient(originalRequest));
          });
        });
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
