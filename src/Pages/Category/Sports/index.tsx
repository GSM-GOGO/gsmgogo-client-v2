/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import * as S from './style.ts';
import Category from '../../../components/Category/index.tsx';
import { useNavigate, useParams } from 'react-router-dom';
// import TeamAddButton from '../../../assets/svg/TeamAddButton.tsx';
import apiClient from '../../../utils/libs/apiClient.ts';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';
import { EmptyPlaying } from '../../../assets/index.ts';
import Notfound from '../../../components/Loading/Notfound.tsx';
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

interface SelectedTeam {
  id: number;
  name: string;
}

interface CheerTeam {
  team_id?: number;
}

const Sports = () => {
  const { sport } = useParams();
  if (!(sport === 'soccer' || sport === 'badminton' || sport === 'volleyball')) {
    return <Notfound />;
  }
  const navigate = useNavigate();

  const initialTeams: Team[] = [];

  const [teams, setTeams] = useState<Team[]>(initialTeams);

  const [cheer, setCheer] = useState(false);
  const [addteam, setAddteam] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<SelectedTeam | null>(null);
  const [cheerTeam, setCheerTeam] = useState<CheerTeam>({});

  useEffect(() => {
    const sportName = sport.toUpperCase();
    const getTeamList = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        const response = await apiClient.get(`/team?type=${sportName}`, {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        });
        setTeams(response.data);
      } catch (e) {}
    };

    getTeamList();

    return () => {
      setTeams([]);
    };
  }, [sport]);

  useEffect(() => {
    const getCheerTeam = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await apiClient.get(`/user/follow-team-id`, {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        });
        setCheerTeam(response.data);
      } catch (e) {}
    };
    getCheerTeam();
  }, []);

  const postFavoriteTeam = async (teamId: number) => {
    try {
      const token = localStorage.getItem('accessToken');

      await apiClient.post(
        `/team/follow`,
        {
          team_id: teamId,
        },
        {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        }
      );
      setCheer(false);
      window.location.reload();
      setTimeout(() => {
        registerFollow();
      }, 500);
    } catch (e) {
      setCheer(false);
      window.location.reload();
    }
  };

  const GoToForm = (sport: string, id: number) => {
    navigate(`/matches/${sport}/form/${id}`, {});
  };
  const GoRegister = () => {
    navigate(`/register`);
  };

  const handleCheerClick = (teamId: number, teamName: string) => {
    setSelectedTeam({ id: teamId, name: teamName });
    setCheer(true);
  };

  const registerFollow = () => {
    toast.success('팀이 팔로우 되었습니다!', { autoClose: 1000 });
  };

  return (
    <>
      {teams.length !== 0 ? (
        <S.Wrapper>
          {cheer && selectedTeam && (
            <S.ModalBackground>
              <S.ModalContainer>
                <S.ModalTextContainer>
                  <S.ModalTitle>
                    <S.ModalTitleContainer>
                      {selectedTeam.name}팀을
                      <br />
                      응원 하시겠습니까?
                    </S.ModalTitleContainer>
                  </S.ModalTitle>
                  <S.ModalNovelContainer>
                    <S.ModalNovel>
                      해당 팀의 경기 때 문자 알림을 받게 됩니다. <br />
                      <div style={{ color: 'var(--Error, #DF454A)' }}>팀은 한번 등록하면 변경 할 수 없습니다.</div>
                    </S.ModalNovel>
                  </S.ModalNovelContainer>
                </S.ModalTextContainer>
                <S.ModalButtonContainer>
                  <S.ModalCencleButton onClick={() => setCheer(false)}>아니오</S.ModalCencleButton>
                  <S.ModalCheerButton onClick={() => postFavoriteTeam(selectedTeam.id)}>응원하기</S.ModalCheerButton>
                </S.ModalButtonContainer>
              </S.ModalContainer>
            </S.ModalBackground>
          )}
          {addteam ? (
            <S.ModalBackground>
              <S.ModalContainer>
                <S.ModalTextContainer style={{ gap: '0' }}>
                  <S.ModalTitle>
                    <S.ModalTitleContainer style={{ alignItems: 'center' }}>
                      팀을 등록하시겠습니까?
                    </S.ModalTitleContainer>
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
          <S.WidthContainer>
            <S.Container>
              <S.ContainerResponse>
                <Category />
                <S.ListWrapper>
                  <>
                    {teams.map((team) => (
                      <>
                        {team.my_team === true ? (
                          <>
                            <S.ListContainer key={team.team_id}>
                              <S.List>
                                <S.TextContainer>
                                  <S.TeamTextContainer>
                                    <S.TeamName
                                      style={{
                                        color: team.follow ? 'var(--Main, #23F69A)' : '',
                                      }}
                                    >
                                      {team.team_name}
                                      {sport === 'soccer' ? 'FC' : '팀'}
                                    </S.TeamName>
                                    <S.TeamClass>
                                      {team.badminton_rank ? (
                                        <>
                                          {team.badminton_rank === 'A'
                                            ? 'A조'
                                            : team.badminton_rank === 'B'
                                              ? 'B조'
                                              : team.badminton_rank === 'C'
                                                ? 'C조'
                                                : team.badminton_rank === 'D'
                                                  ? '여자조'
                                                  : ''}
                                        </>
                                      ) : (
                                        <>
                                          {team.team_grade === 'ONE'
                                            ? '1학년'
                                            : team.team_grade === 'TWO'
                                              ? '2학년'
                                              : '3학년'}
                                          {team.team_class_type === 'SW' ? '소개과' : '임베과'}
                                        </>
                                      )}
                                    </S.TeamClass>
                                  </S.TeamTextContainer>
                                  <S.WinText>{team.win_count}승</S.WinText>
                                </S.TextContainer>
                                <S.ButtonContainer>
                                  <S.FormationButton
                                    onClick={() => GoToForm(sport, team.team_id)}
                                    style={{
                                      border: team.follow ? '1px solid var(--Main, #23F69A)' : '',
                                      color: team.follow ? 'var(--Main, #23F69A)' : '',
                                    }}
                                  >
                                    포메이션
                                  </S.FormationButton>
                                  {team.follow === true ? (
                                    <></>
                                  ) : cheerTeam.team_id === null ? (
                                    <S.CheerButton onClick={() => handleCheerClick(team.team_id, team.team_name)}>
                                      응원하기
                                    </S.CheerButton>
                                  ) : (
                                    <></>
                                  )}
                                </S.ButtonContainer>
                              </S.List>
                            </S.ListContainer>
                            <S.StrokeContainer>
                              <S.Stroke />
                            </S.StrokeContainer>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                  </>
                  {teams.map((team) => (
                    <>
                      {team.my_team === false ? (
                        <>
                          <S.ListContainer key={team.team_id}>
                            <S.List>
                              <S.TextContainer>
                                <S.TeamTextContainer>
                                  <S.TeamName
                                    style={{
                                      color: team.follow ? 'var(--Main, #23F69A)' : '',
                                    }}
                                  >
                                    {team.team_name}
                                    {sport === 'soccer' ? 'FC' : '팀'}
                                  </S.TeamName>
                                  <S.TeamClass>
                                    {team.badminton_rank ? (
                                      <>
                                        {team.badminton_rank === 'A'
                                          ? 'A조'
                                          : team.badminton_rank === 'B'
                                            ? 'B조'
                                            : team.badminton_rank === 'C'
                                              ? 'C조'
                                              : team.badminton_rank === 'D'
                                                ? '여자조'
                                                : ''}
                                      </>
                                    ) : (
                                      <>
                                        {team.team_grade === 'ONE'
                                          ? '1학년'
                                          : team.team_grade === 'TWO'
                                            ? '2학년'
                                            : '3학년'}
                                        {team.team_class_type === 'SW' ? '소개과' : '임베과'}
                                      </>
                                    )}
                                  </S.TeamClass>
                                </S.TeamTextContainer>
                                <S.WinText>{team.win_count}승</S.WinText>
                              </S.TextContainer>
                              <S.ButtonContainer>
                                <S.FormationButton
                                  onClick={() => GoToForm(sport, team.team_id)}
                                  style={{
                                    border: team.follow ? '1px solid var(--Main, #23F69A)' : '',
                                    color: team.follow ? 'var(--Main, #23F69A)' : '',
                                  }}
                                >
                                  포메이션
                                </S.FormationButton>
                                {team.follow === true ? (
                                  <></>
                                ) : cheerTeam.team_id === null ? (
                                  <S.CheerButton onClick={() => handleCheerClick(team.team_id, team.team_name)}>
                                    응원하기
                                  </S.CheerButton>
                                ) : (
                                  <></>
                                )}
                              </S.ButtonContainer>
                            </S.List>
                          </S.ListContainer>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}

                  {/* <S.AddButton onClick={() => setAddteam(!addteam)}>
                    <TeamAddButton />
                  </S.AddButton> */}
                  <S.ShowMatchContainer>
                    <S.ShowMatchBox>
                      <S.ShowMatchText>대진표 보기</S.ShowMatchText>
                    </S.ShowMatchBox>
                  </S.ShowMatchContainer>
                </S.ListWrapper>
              </S.ContainerResponse>
            </S.Container>
          </S.WidthContainer>
        </S.Wrapper>
      ) : (
        <>
          <S.Wrapper>
            {addteam ? (
              <S.ModalBackground>
                <S.ModalContainer>
                  <S.ModalTextContainer style={{ gap: '0' }}>
                    <S.ModalTitle>
                      <S.ModalTitleContainer style={{ alignItems: 'center' }}>
                        팀을 등록하시겠습니까?
                      </S.ModalTitleContainer>
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
            <S.WidthContainer>
              <S.Container>
                <Category />
                <S.ContainerResponse>
                  <S.ListWrapper style={{ alignItems: 'center' }}>
                    <S.SvgContainer>
                      <EmptyPlaying />
                    </S.SvgContainer>
                    {/* <S.AddButton onClick={() => setAddteam(!addteam)}>
                      <TeamAddButton />
                    </S.AddButton> */}
                  </S.ListWrapper>
                </S.ContainerResponse>
              </S.Container>
            </S.WidthContainer>
          </S.Wrapper>
        </>
      )}

      <ToastContainer autoClose={1000} />
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </>
  );
};

export default Sports;
