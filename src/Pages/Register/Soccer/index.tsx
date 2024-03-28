import { useEffect, useRef, useState } from "react";
import { People } from "../../../assets/index.ts";
import HeaderContainer from "../../../components/HeaderContainer/index.tsx";
import * as S from "./style.ts";
import Draggable from "react-draggable";
import Field from "../../../assets/png/Field.png";
import { useNavigate, useLocation } from "react-router-dom";

const Soccer = () => {
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });
  const formationFieldRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { teamName, selectedMembers } = location.state;

  console.log(teamName);
  console.log(selectedMembers);
  const convertedMembers = selectedMembers.map((member, index) => ({
    id: index + 1,
    name: member.split(" ")[1],
    x: [160, 80, 250, 50, 160, 280, 80, 250][index % 8],
    y: [55, 150, 150, 250, 250, 250, 375, 375][index % 8],
  }));

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
                {teamName}팀 축구 포메이션
              </S.Category>
            </S.CategoryContainer>

            <S.ContainerResponse style={{ paddingBottom: "3.5rem" }}>
              <S.ImgBox
                ref={formationFieldRef}
                img={Field}
                style={{ position: "relative" }}
              >
                {convertedMembers.map((player) => (
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
              top: "5rem",
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

export default Soccer;
