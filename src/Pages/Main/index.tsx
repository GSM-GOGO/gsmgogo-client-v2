import HeaderContainer from '../../components/HeaderContainer/index.tsx';
import PlayingContainer from '../../components/PlayingContainer/index.tsx';
import * as S from "./style";

const Main = () => {
  return (
    <>
      <HeaderContainer/>
      <S.MainContainer>
        <PlayingContainer/>
      </S.MainContainer>
    </>
  );
};

export default Main;