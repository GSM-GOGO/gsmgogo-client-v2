import * as S from './style.ts';
import { GAuthLogo, SignInLogo } from '../../assets';
import '@msg-team/gauth-react/dist/index.css';

import apiClient from '../../utils/libs/apiClient.ts';

const Signin = () => {
  const handleSignIn = async () => {
    try {
      const response = await apiClient.get('/auth/login');
      window.location.href = response.data.redirect;
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
