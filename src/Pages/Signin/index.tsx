import * as S from './style.ts';
import { SignInLogo } from '../../assets';
import { GauthLoginButton } from '@msg-team/gauth-react';
import '@msg-team/gauth-react/dist/index.css';

const Signin = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <S.ImgBox src={SignInLogo} alt="SigninLogo" />
          <GauthLoginButton />
        </S.ContainerResponse>
      </S.Container>
    </S.Wrapper>
  );
};

export default Signin;
