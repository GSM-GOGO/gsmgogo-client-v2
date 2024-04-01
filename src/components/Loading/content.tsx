import * as S from './style.ts';
import { LoadingLogo } from '../../assets';

const LoadingContent = () => {
  return (
    <S.ContainerResponse>
      <S.LoadingText>로딩중...</S.LoadingText>
    </S.ContainerResponse>
  );
};

export default LoadingContent;
