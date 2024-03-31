import { EmptyPlaying } from '../../assets/svg/index.ts';
import HeaderContainer from '../../components/HeaderContainer';
import * as S from './style';

const Minigame = () => {
  return (
    <>
      <HeaderContainer />
      <S.SvgContainer>
        <EmptyPlaying />
      </S.SvgContainer>
    </>
  );
};

export default Minigame;
