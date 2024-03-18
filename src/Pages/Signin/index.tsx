import * as S from './style.ts';
import { GAuthLogo, SignInLogo } from '../../assets';
import '@msg-team/gauth-react/dist/index.css';
import { GAUTH_CLIENT_ID, REDIRECT_URI } from '../../utils/env.ts';

const Signin = () => {
  const handleSignIn = () => {
    window.location.href = `https://gauth.co.kr/login?client_id=${GAUTH_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
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
