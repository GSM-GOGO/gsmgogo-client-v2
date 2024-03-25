import { useState } from "react";
import HeaderContainer from "../../../components/HeaderContainer/index.tsx";
import * as S from "./style.ts";
import Category from "../../../components/Category/index.tsx";
import { useNavigate, useParams } from "react-router-dom";
import TeamAddButton from "../../../assets/svg/TeamAddButton.tsx";

const Sports = () => {
  const { sport } = useParams();
  if (!(sport === "soccer" || sport === "basketball" || sport === "volleyball")) {
    return <h1>Not Found</h1>;
  }
  const navigate = useNavigate();

  const [cheer, setCheer] = useState(false);
  const [addteam, setAddteam] = useState(false);

  const GoToForm = (sport: string) => {
    navigate(`/matches/${sport}/form`);
  };

  return (
    <>
      <HeaderContainer />
      <S.Wrapper>
        {cheer ? (
          <S.ModalBackground>
            <S.ModalContainer>
              <S.ModalTextContainer>
                <S.ModalTitle>
                  <S.ModalTitleContainer>
                    어쩌구저쩌구팀을
                    <br />
                    응원 하시겠습니까?
                  </S.ModalTitleContainer>
                </S.ModalTitle>
                <S.ModalNovelContainer>
                  <S.ModalNovel>
                    해당 팀의 경기 때 문자 알림을 받게 됩니다 <br />
                    팀은 한 팀만 응원할 수 있습니다.
                  </S.ModalNovel>
                </S.ModalNovelContainer>
              </S.ModalTextContainer>
              <S.ModalButtonContainer>
                <S.ModalCencleButton onClick={() => setCheer(!cheer)}>아니오</S.ModalCencleButton>
                <S.ModalCheerButton>응원하기</S.ModalCheerButton>
              </S.ModalButtonContainer>
            </S.ModalContainer>
          </S.ModalBackground>
        ) : null}
        {addteam ? (
          <S.ModalBackground>
            <S.ModalContainer>
              <S.ModalTextContainer style={{ gap: "0" }}>
                <S.ModalTitle>
                  <S.ModalTitleContainer style={{ alignItems: "center" }}>팀을 등록하시겠습니까?</S.ModalTitleContainer>
                </S.ModalTitle>
                <S.ModalNovelContainer>
                  <S.ModalNovel style={{ color: "var(--Error, #DF454A)" }}>
                    경기에 참여한 선수는 자신이 참여한 경기에
                    <br /> 투표할 수 없습니다
                  </S.ModalNovel>
                </S.ModalNovelContainer>
              </S.ModalTextContainer>
              <S.ModalButtonContainer>
                <S.ModalCencleButton onClick={() => setAddteam(!addteam)}>아니오</S.ModalCencleButton>
                <S.ModalCheerButton onClick={()=>GoToForm(sport)}>팀구성하기</S.ModalCheerButton>
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
                      <S.TeamName>어쩌고저쩌고팀</S.TeamName>
                      <S.TeamClass>3학년 2반</S.TeamClass>
                    </S.TeamTextContainer>
                    <S.WinText>3승</S.WinText>
                  </S.TextContainer>
                  <S.FormationButton onClick={() => GoToForm(sport)}>포메이션</S.FormationButton>
                </S.List>
              </S.ListContainer>
              <S.Stroke />
              <S.ListContainer>
                <S.List>
                  <S.TextContainer>
                    <S.TeamTextContainer>
                      <S.TeamName>어쩌고저쩌고팀</S.TeamName>
                      <S.TeamClass>3학년 2반</S.TeamClass>
                    </S.TeamTextContainer>
                    <S.WinText>3승</S.WinText>
                  </S.TextContainer>
                  <S.ButtonContainer>
                    <S.FormationButton onClick={() => GoToForm(sport)}>포메이션</S.FormationButton>
                    <S.CheerButton onClick={() => setCheer(!cheer)}>응원하기</S.CheerButton>
                  </S.ButtonContainer>
                </S.List>
              </S.ListContainer>
              <S.ListContainer>
                <S.List>
                  <S.TextContainer>
                    <S.TeamTextContainer>
                      <S.TeamName>{sport}팀</S.TeamName>
                      <S.TeamClass>3학년 2반</S.TeamClass>
                    </S.TeamTextContainer>
                    <S.WinText>3승</S.WinText>
                  </S.TextContainer>
                  <S.ButtonContainer>
                    <S.FormationButton onClick={() => GoToForm("soccer")}>포메이션</S.FormationButton>
                    <S.CheerButton onClick={() => setCheer(!cheer)}>응원하기</S.CheerButton>
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

export default Sports;
