import { useEffect } from 'react';
import { useLocation, Location, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/index.tsx';
import apiClient from '../../utils/libs/apiClient.ts';

const AuthCallBack = () => {
  const navigate = useNavigate();
  const location: Location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const gauthCode: string | null = searchParams.get('code');

  const fetchData = async () => {
    try {
      if (gauthCode) {
        const Response = await apiClient.get(`/auth/callback?code=${gauthCode}`);
        const accessToken = Response.headers['authorization'];
        const refreshToken = Response.headers['refresh-token'];
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        if (Response.data.isSignup === false) {
          navigate('/signup');
        } else {
          navigate('/');
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <Loading />; //
};

export default AuthCallBack;
