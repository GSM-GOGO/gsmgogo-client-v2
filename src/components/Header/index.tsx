import * as S from "./style";

interface TextTypeProps {
  mainText: string,
  miniText: string[],
  point: string,
}

const numberWithCommas = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Header: React.FC<TextTypeProps> = ({ mainText, miniText, point }) => (
  <S.HeaderWrapper>
    <S.GoGoText>
      {mainText}
    </S.GoGoText>
    <S.TextBox>
      {miniText.map((text, i) => (
        <>
          <S.GoGoMiniText 
            key={i} 
            style={{
              color: "var(--Gray1, #B7B7BE)",
              cursor: "pointer"
            }}
          >
            {text}
          </S.GoGoMiniText>
        </>
      ))}
      <S.GoGoMiniText style={{ color: "var(--Main, #23F69A)" }}>
          {numberWithCommas(point)}
          P
        </S.GoGoMiniText>
    </S.TextBox>
  </S.HeaderWrapper>
);

export default Header;