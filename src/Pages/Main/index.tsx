import * as S from './style.ts';
import Header from '../../components/Header';

const Main = () => {
  return (
    <>
      <S.Background>
        <S.HeaderContainer>
          <Header 
            mainText={"GSM GOGO"} 
            miniText={["랭킹", "미니게임"]}
            point={"30000"}
          />
        </S.HeaderContainer>
      </S.Background>
    </>
  );
};

export default Main;