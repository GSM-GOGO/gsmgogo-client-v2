import { useEffect, useRef, useState } from "react";
import { People } from "../../../assets/index.ts";
import HeaderContainer from "../../../components/HeaderContainer/index.tsx";
import * as S from "./style.ts";
import Draggable from "react-draggable";
import Field from "../../../assets/png/Field.png";
import { useNavigate, useLocation } from "react-router-dom";

const Badminton = () => {
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });
  const formationFieldRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { teamName, selectedMembers, selecetedSport } = location.state;

  console.log(teamName);
  console.log(selectedMembers);
  console.log(selecetedSport);

  useEffect(() => {
    if (formationFieldRef.current) {
      const { left, top, right, bottom } =
        formationFieldRef.current.getBoundingClientRect();
      setBounds({
        left: 20,
        top: 40,
        right: right - left - 55,
        bottom: bottom - top - 80,
      });
    }
  }, []);

  const GoBackButton = () => {
    navigate(`/matches/soccer`);
  };

  return (
    <>
      <HeaderContainer />
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category
                style={{ color: "var(--White, #FFF)", paddingRight: "1.5rem" }}
              >
                어쩌구저쩌구팀 배드민턴 포메이션
                <S.MiniText>3학년 SW</S.MiniText>
              </S.Category>
              <S.Category style={{ color: "var(--Main, #23F69A)" }}>
                3승
              </S.Category>
            </S.CategoryContainer>

            <S.ContainerResponse style={{ paddingBottom: "3.5rem" }}>
              <S.ImgBox
                ref={formationFieldRef}
                img={Field}
                style={{ position: "relative" }}
              >
                {BadmintonplayersList.map((player) => (
                  <div key={player.id} style={{ position: "absolute" }}>
                    <div style={{ position: "relative" }}>
                      <Draggable
                        defaultPosition={{ x: player.x, y: player.y }}
                        bounds={bounds}
                        nodeRef={formationFieldRef}
                      >
                        <S.PlayerContainer style={{ cursor: "pointer" }}>
                          <People />
                          <S.PlayerText style={{ userSelect: "none" }}>
                            {player.name}
                          </S.PlayerText>
                        </S.PlayerContainer>
                      </Draggable>
                    </div>
                  </div>
                ))}
              </S.ImgBox>
            </S.ContainerResponse>
          </S.ContainerResponse>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              top: "20rem",
              position: "relative",
            }}
          >
            <S.BackButton onClick={GoBackButton}>
              <S.BackText>돌아가기</S.BackText>
            </S.BackButton>
          </div>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Badminton;
