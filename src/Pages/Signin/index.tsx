import * as S from './style.ts';
import { GAuthLogo, SignInLogo } from '../../assets';
import '@msg-team/gauth-react/dist/index.css';

import { useNavigate } from 'react-router-dom';
import apiClient from '../../utils/libs/apiClient.ts';
import { useEffect } from 'react';
import IsLoggedIn from '../../utils/IsLoggedIn.ts';
import { Login } from '../../utils/apis/auth.ts';

const Signin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = async () => {
      if (await IsLoggedIn()) {
        navigate('/');
      }
    };
    checkLoggedIn();
  }, []);
  Login();

  const handleSignIn = async () => {
    try {
      const response = await apiClient.get('/auth/login');
      navigate(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <S.ImgBox src={SignInLogo} alt="SigninLogo" />
          <S.GauthLoginButton onClick={handleSignIn}>
            <GAuthLogo />
            Sign up with GAuth
          </S.GauthLoginButton>
        </S.ContainerResponse>
      </S.Container>
    </S.Wrapper>
  );
};

export default Signin;
