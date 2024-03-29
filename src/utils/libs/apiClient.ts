import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_API,
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      try {
        const token = localStorage.getItem('refreshToken');
        const Response = await apiClient.get(`/auth/refresh`, {
          headers: {
            'Refresh-Token': `${token}`,
          },
        });
        const accessToken = Response.headers['authorization'];
        const refreshToken = Response.headers['refresh-token'];
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        error.config.headers['Authorization'] = accessToken;
        return apiClient.request(error.config);
      } catch (refreshError) {
        window.location.href = '/signin';
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
