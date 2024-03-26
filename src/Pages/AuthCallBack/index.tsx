import { useEffect } from 'react';
import { useLocation, Location, useNavigate } from 'react-router-dom';

import * as S from './style.ts';
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
        console.log(Response);
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
  return <S.Text>콜백 되는 페이지</S.Text>;
};

export default AuthCallBack;
