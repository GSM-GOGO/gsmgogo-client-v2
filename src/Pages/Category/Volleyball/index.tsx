import { useState } from 'react';
import HeaderContainer from '../../../components/HeaderContainer/index.tsx';
import * as S from './style.ts';
import Category from '../../../components/Category/index.tsx';
import { useNavigate } from 'react-router-dom';

const Volleyball = () => {
  const navigate = useNavigate();

  const [cheer, setCheer] = useState(false);

  const GoToForm = (sport: string) => {
    navigate(`/matches/${sport}/form`)
  }

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
                  <S.FormationButton onClick={() => GoToForm("volleyball")}>포메이션</S.FormationButton>
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
                      <S.FormationButton onClick={() => GoToForm("volleyball")}>포메이션</S.FormationButton>
                      <S.CheerButton onClick={() => setCheer(!cheer)}>응원하기</S.CheerButton>
                    </S.ButtonContainer>
                </S.List>
              </S.ListContainer>
              <S.ListContainer>
                <S.List>
                  <S.TextContainer>
                    <S.TeamTextContainer>
                      <S.TeamName>배구팀</S.TeamName>
                      <S.TeamClass>3학년 2반</S.TeamClass>
                    </S.TeamTextContainer>
                    <S.WinText>3승</S.WinText>
                  </S.TextContainer>
                    <S.ButtonContainer>
                      <S.FormationButton onClick={() => GoToForm("volleyball")}>포메이션</S.FormationButton>
                      <S.CheerButton onClick={() => setCheer(!cheer)}>응원하기</S.CheerButton>
                    </S.ButtonContainer>
                </S.List>
              </S.ListContainer>
            </S.ListWrapper>
          </S.ContainerResponse>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Volleyball;
