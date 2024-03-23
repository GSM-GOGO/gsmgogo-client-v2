import { OpenReview } from '../../../assets/index.ts';
import HeaderContainer from '../../../components/HeaderContainer/index.tsx';
import * as S from './style.ts';
import { useNavigate } from 'react-router-dom';

const NomalForm = () => {
  const navigate = useNavigate();

  const GoToForm = (sport: string) => {
    navigate(`/matches/${sport}/form`);
  };

  return (
    <>
      <HeaderContainer />
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.TeamTextContainer>
              <S.TeamName>소프트웨어 개발과 일반 경기</S.TeamName>
              <S.TeamClass>2학년 SW</S.TeamClass>
            </S.TeamTextContainer>
            <S.ListWrapper>
              <S.ListContainer>
                <S.List>
                  <S.SportsText>6인 7각</S.SportsText>
                  <OpenReview />
                </S.List>
              </S.ListContainer>
              <S.ListContainer>
                <S.List>
                  <S.SportsText>6인 7각</S.SportsText>
                  <S.ButtonContainer>
                    <OpenReview />
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

export default NomalForm;
