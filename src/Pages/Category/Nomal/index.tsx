import HeaderContainer from "../../../components/HeaderContainer/index.tsx";
import * as S from "./style.ts";
import Category from "../../../components/Category/index.tsx";
import { useNavigate } from "react-router-dom";
import TeamAddButton from "../../../assets/svg/TeamAddButton.tsx";
import { useState } from "react";

const NomalMatch = () => {
  const navigate = useNavigate();

  const [addteam, setAddteam] = useState(false);

  const GoToForm = (sport: string) => {
    navigate(`/matches/${sport}/form`);
  };

  const GoRegister = () => {
    navigate(`/register`);
  };

  return (
    <>
      <HeaderContainer />
      <S.Wrapper>
        {addteam ? (
          <S.ModalBackground>
            <S.ModalContainer>
              <S.ModalTextContainer style={{ gap: "0" }}>
                <S.ModalTitle>
                  <S.ModalTitleContainer style={{ alignItems: "center" }}>
                    팀을 등록하시겠습니까?
                  </S.ModalTitleContainer>
                </S.ModalTitle>
                <S.ModalNovelContainer>
                  <S.ModalNovel style={{ color: "var(--Error, #DF454A)" }}>
                    경기에 참여한 선수는 자신이 참여한 경기에
                    <br /> 투표할 수 없습니다
                  </S.ModalNovel>
                </S.ModalNovelContainer>
              </S.ModalTextContainer>
              <S.ModalButtonContainer>
                <S.ModalCencleButton onClick={() => setAddteam(!addteam)}>
                  아니오
                </S.ModalCencleButton>
                <S.ModalCheerButton onClick={GoRegister}>
                  팀구성하기
                </S.ModalCheerButton>
              </S.ModalButtonContainer>
            </S.ModalContainer>
          </S.ModalBackground>
        ) : null}
        <S.Container>
          <S.ContainerResponse>
            <Category />
            <S.ListWrapper>
              <S.ListContainer>
                <S.List>
                  <S.TextContainer>
                    <S.TeamTextContainer>
                      <S.TeamClass>1학년</S.TeamClass>
                      <S.TeamClass>소프트웨어 개발과</S.TeamClass>
                    </S.TeamTextContainer>
                  </S.TextContainer>
                  <S.CheckButton onClick={() => GoToForm("NomalMatch")}>
                    확인하기
                  </S.CheckButton>
                </S.List>
              </S.ListContainer>
              <S.Stroke />
              <S.ListContainer>
                <S.List>
                  <S.TextContainer>
                    <S.TeamTextContainer>
                      <S.TeamClass>1학년</S.TeamClass>
                      <S.TeamClass>소프트웨어 개발과</S.TeamClass>
                    </S.TeamTextContainer>
                  </S.TextContainer>
                  <S.ButtonContainer>
                    <S.CheckButton onClick={() => GoToForm("NomalMatch")}>
                      확인하기
                    </S.CheckButton>
                  </S.ButtonContainer>
                </S.List>
              </S.ListContainer>
              <S.AddButton onClick={() => setAddteam(!addteam)}>
                <TeamAddButton />
              </S.AddButton>
            </S.ListWrapper>
          </S.ContainerResponse>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default NomalMatch;
