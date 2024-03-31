import HeaderContainer from '../../../components/HeaderContainer/index.tsx';
import * as S from './style.ts';
import Category from '../../../components/Category/index.tsx';
import { useNavigate } from 'react-router-dom';
import TeamAddButton from '../../../assets/svg/TeamAddButton.tsx';
import { useEffect, useState } from 'react';
import apiClient from '../../../utils/libs/apiClient.ts';

interface Team {
  team_id: number;
  team_name: string;
  team_grade: 'ONE' | 'TWO' | 'THREE';
  team_class_type: 'SW' | 'EB';
  win_count: number;
  follow: boolean;
  my_team: boolean;
  badminton_rank?: 'A' | 'B' | 'C' | 'D';
}

const NomalMatch = () => {
  const navigate = useNavigate();

  const [addteam, setAddteam] = useState(false);
  const [teamList, setTeamList] = useState<Team[]>([]);
  //
  const GoRegister = () => {
    navigate(`/register`);
  };

  useEffect(() => {
    const fetchNormal = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await apiClient.get(`/team?type=NORMAL`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setTeamList(response.data);
      } catch (e) {}
    };

    fetchNormal();
  }, []);

  return (
    <>
      {addteam ? (
        <S.ModalBackground>
          <S.ModalContainer>
            <S.ModalTextContainer style={{ gap: '0' }}>
              <S.ModalTitle>
                <S.ModalTitleContainer style={{ alignItems: 'center' }}>팀을 등록하시겠습니까?</S.ModalTitleContainer>
              </S.ModalTitle>
              <S.ModalNovelContainer>
                <S.ModalNovel style={{ color: 'var(--Error, #DF454A)' }}>
                  경기에 참여한 선수는 자신이 참여한 경기에
                  <br /> 투표할 수 없습니다
                </S.ModalNovel>
              </S.ModalNovelContainer>
            </S.ModalTextContainer>
            <S.ModalButtonContainer>
              <S.ModalCencleButton onClick={() => setAddteam(!addteam)}>아니오</S.ModalCencleButton>
              <S.ModalCheerButton onClick={GoRegister}>팀구성하기</S.ModalCheerButton>
            </S.ModalButtonContainer>
          </S.ModalContainer>
        </S.ModalBackground>
      ) : null}
      <HeaderContainer />
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <Category />
            <S.ListWrapper>
              {teamList.map((team) => (
                <>
                  {team.my_team === true ? (
                    <>
                      <S.ListContainer>
                        <S.List>
                          <S.TextContainer>
                            <S.TeamTextContainer>
                              <S.TeamClass>
                                {team.team_grade === 'ONE' ? '1학년' : team.team_grade === 'TWO' ? '2학년' : '3학년'}
                              </S.TeamClass>
                              <S.TeamClass>
                                {team.team_class_type === 'SW' ? '소프트웨어 개발과' : '임베디드 개발과'}
                              </S.TeamClass>
                            </S.TeamTextContainer>
                          </S.TextContainer>
                          <S.CheckButton onClick={() => navigate(`/matches/NomalMatch/form/${team.team_id}`)}>
                            확인하기
                          </S.CheckButton>
                        </S.List>
                      </S.ListContainer>
                      <S.Stroke />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ))}

              {teamList.map((team) => (
                <>
                  {team.my_team === false ? (
                    <>
                      <S.ListContainer>
                        <S.List>
                          <S.TextContainer>
                            <S.TeamTextContainer>
                              <S.TeamClass>
                                {team.team_grade === 'ONE' ? '1학년' : team.team_grade === 'TWO' ? '2학년' : '3학년'}
                              </S.TeamClass>
                              <S.TeamClass>소프트웨어 개발과</S.TeamClass>
                            </S.TeamTextContainer>
                          </S.TextContainer>
                          <S.ButtonContainer>
                            <S.CheckButton onClick={() => navigate(`/matches/NomalMatch/form/${team.team_id}`)}>
                              확인하기
                            </S.CheckButton>
                          </S.ButtonContainer>
                        </S.List>
                      </S.ListContainer>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ))}
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
