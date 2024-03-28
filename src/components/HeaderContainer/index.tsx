import Header from "../../components/Header";
import { GlobalStyles } from "../../style/Globalstyles.ts";
import * as S from "./style.ts";

const HeaderContainer = () => {
  return (
    <>
      <GlobalStyles />
      <S.HeaderContainer>
        <Header mainText={"GSM GOGO"} miniText={["랭킹", "미니게임"]} />
      </S.HeaderContainer>
    </>
  );
};

export default HeaderContainer;
