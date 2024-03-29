import * as S from './style.ts';
import { LoadingLogo } from '../../assets';

const Loading = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <S.ImgBox src={LoadingLogo} alt="SigninLogo" />
          <S.LoadingText>로딩중...</S.LoadingText>
        </S.ContainerResponse>
      </S.Container>
    </S.Wrapper>
  );
};

export default Loading;
