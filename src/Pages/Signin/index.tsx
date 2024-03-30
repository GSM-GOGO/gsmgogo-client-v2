import * as S from './style.ts';
import { GAuthLogo, SignInLogo } from '../../assets';
import '@msg-team/gauth-react/dist/index.css';
import apiClient from '../../utils/libs/apiClient.ts';
import { useState } from 'react';

const Signin = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    if (isSigningIn) return;

    setIsSigningIn(true);

    try {
      const response = await apiClient.get('/auth/login');
      window.location.href = response.data.redirect;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setTimeout(() => {
        setIsSigningIn(false);
      }, 800);
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <S.ImgBox src={SignInLogo} alt="SigninLogo" />
          <S.GauthLoginButton onClick={handleSignIn} disabled={isSigningIn}>
            <GAuthLogo />
            Sign up with GAuth
          </S.GauthLoginButton>
        </S.ContainerResponse>
      </S.Container>
    </S.Wrapper>
  );
};

export default Signin;
