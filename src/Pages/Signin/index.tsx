import * as S from './style.ts';
import { useState } from 'react';

import { GAuthLogo, SignInLogo } from '@/assets';
import { apiClient } from '@/utils';

import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

import '@msg-team/gauth-react/dist/index.css';

const Signin = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    if (isSigningIn) return;

    setIsSigningIn(true);

    try {
      const response = await apiClient.get('/auth/login');
      window.location.href = response.data.redirect;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
      setTimeout(() => {
        toast.error(errorMessage, { autoClose: 1000 });
      }, 500);
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
      <ToastContainer autoClose={1000} />
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </S.Wrapper>
  );
};

export default Signin;
