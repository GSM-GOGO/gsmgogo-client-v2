import HeaderContainer from '../../../components/HeaderContainer/index.tsx';
import * as S from './style.ts';
import Category from '../../../components/Category/index.tsx';
import { useNavigate } from 'react-router-dom';
import TeamAddButton from '../../../assets/svg/TeamAddButton.tsx';
import { useState } from 'react';
import useAccessTokenCheck from '../../../hook/useAccessTokenCheck.tsx';

const NomalMatch = () => {
  const navigate = useNavigate();

  useAccessTokenCheck();

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
                  <S.CheckButton onClick={() => GoToForm('NomalMatch')}>확인하기</S.CheckButton>
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
                    <S.CheckButton onClick={() => GoToForm('NomalMatch')}>확인하기</S.CheckButton>
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
