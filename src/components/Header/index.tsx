import { useLocation, useNavigate } from "react-router-dom";
import { ThreeDot } from "../../assets";
import * as S from "./style";

interface TextTypeProps {
  mainText: string;
  miniText: string[];
  point: string;
}

const numberWithCommas = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Header: React.FC<TextTypeProps> = ({ mainText, miniText, point }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.HeaderWrapper>
      <S.GoGoText onClick={() => navigate(`/`)} style={{ cursor: "pointer" }}>
        {mainText}
      </S.GoGoText>

      <S.TextBox>
        <S.GoGoMiniLink
          to="/ranking"
          style={currentPath === "/ranking" ? { color: "#23F69A" } : undefined}
        >
          {miniText[0]}
        </S.GoGoMiniLink>

        <S.GoGoMiniLink
          to="/minigame"
          style={currentPath === "/minigame" ? { color: "#23F69A" } : undefined}
        >
          {miniText[1]}
        </S.GoGoMiniLink>

        <S.GoGoMiniText
          style={{
            color: "var(--Main, #23F69A)",
          }}
        >
          {numberWithCommas(point)}P
        </S.GoGoMiniText>

        <div style={{ cursor: "pointer" }}>
          <ThreeDot />
        </div>
      </S.TextBox>
    </S.HeaderWrapper>
  );
};

export default Header;
