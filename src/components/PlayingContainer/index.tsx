import * as S from './style';
import * as S1 from './style1.ts';
import { useEffect, useMemo, useState, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

import apiClient from '../../utils/libs/apiClient';
import LoadingContent from '../../components/Loading/content.tsx';
import { EmptyPlaying } from '../../assets/index.ts';
import { useNavigate } from 'react-router-dom';

interface Match {
  match_id: number;
  match_type: 'SOCCER' | 'BADMINTON' | 'VOLLEYBALL';
  match_level: 'TRYOUT' | 'SEMI_FINAL' | 'FINAL';
  team_a_id?: number;
  team_a_name: string;
  team_a_grade?: 'ONE' | 'TWO' | 'THREE';
  team_a_class_type?: 'SW' | 'EB';
  team_b_id?: number;
  team_b_name: string;
  team_b_grade?: 'ONE' | 'TWO' | 'THREE';
  team_b_class_type?: 'SW' | 'EB';
  badminton_rank?: 'A' | 'B' | 'C' | 'D';
  badminton_a_participate_names: string;
  badminton_b_participate_names: string;
  match_start_at: string;
  match_end_at: string;
  is_vote: boolean;
  team_a_bet: number;
  team_b_bet: number;
  is_participate_team_id?: number;
  bet_team_a_score?: number;
  bet_team_b_score?: number;
  bet_point?: number;
}

interface MatchResult extends Match {
  team_a_score: number;
  team_b_score: number;
  bet_team_a_score: number;
  bet_team_b_score: number;
  earned_point: number;
  lose_point: number;
  participate_earned_point: number;
}

const PlayContainer = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [matches, setMatches] = useState<Match[]>([]);
  const [matchResult, setMatchResult] = useState<MatchResult[]>([]);
  const [modal, setModal] = useState(false);
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [sameInput, setSameInput] = useState(false);
  const [point, setPoint] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedSports, setSelectedSports] = useState('');
  const [nextModal, setNextModal] = useState(false);
  const [matchId, setMatchId] = useState<number | undefined>();
  const [loading, setLoading] = useState(true);
  const [favoriteTeam, setFavoriteTeam] = useState<number | undefined>();

  const navigate = useNavigate();

  useEffect(() => {
    const getUserPoint = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        const response = await apiClient.get(`/user/follow-team-id`, {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        });
        setFavoriteTeam(response.data.team_id);
      } catch (e) {}
    };

    if (favoriteTeam === undefined) {
      getUserPoint();
    }
  }, []);

  const dates = useMemo(() => {
    const today = new Date();
    const newDates: Date[] = [];
    for (let i = 0; i < 11; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      newDates.push(date);
    }
    return newDates;
  }, []);

  const dayOfWeek = useMemo(() => {
    return dates.map((date) => {
      const days = ['일', '월', '화', '수', '목', '금', '토'];
      const dayIndex = date.getDay();
      return days[dayIndex];
    });
  }, [dates]);

  const handleDateClick = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  const onChangeInput = (e: { target: { name: string; value: string } }) => {
    const {
      target: { name, value },
    } = e;

    const filteredInput = value.replace(/\D/g, '');

    if (name === 'TeamA') {
      setTeamA(filteredInput);
    } else if (name === 'TeamB') {
      setTeamB(filteredInput);
    }
  };

  const onPointInput = (e: { target: { value: string } }) => {
    const {
      target: { value },
    } = e;

    const filteredInput = value === '0' ? '' : value.replace(/\D/g, '');

    setPoint(filteredInput);
  };

  const handleButton = () => {
    if (teamA === teamB && teamA !== '' && teamB !== '') {
      setSameInput(true);
    } else if (teamA !== '' && teamB !== '') {
      setSameInput(false);
      setNextModal(true);
    }
  };

  const handleBettingClick = (
    match_id: number | undefined,
    team_a_score: string,
    team_b_score: string,
    bet_point: string
  ) => {
    if (match_id !== undefined) {
      const token = localStorage.getItem('accessToken');

      apiClient
        .post(
          `/bet`,
          {
            match_id: Number(match_id),
            bet_point: Number(bet_point),
            team_a_score: Number(team_a_score),
            team_b_score: Number(team_b_score),
          },
          {
            headers: {
              Authorization: token,
            },
            withCredentials: true,
          }
        )
        .then(() => {
          toast.success('투표 완료 되었습니다.', { autoClose: 1000 });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            const errorMessage = error.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
            toast.error(errorMessage, { autoClose: 1000 });
          } else {
            const errorMessage = error.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
            toast.error(errorMessage, { autoClose: 1000 });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const HandleModalOpen = (TeamName1: string, TeamName2: string) => {
    setSelectedTeam(`${TeamName1} - ${TeamName2}`);
    setModal(true);
  };

  const ClickedSportsName = (SportsName: string) => {
    setSelectedSports(`${SportsName}`);
  };

  useEffect(() => {
    if (selectedDate) {
      const month = selectedDate.getMonth() + 1;
      const day = selectedDate.getDate();

      const fetchData = async () => {
        try {
          setMatches([]);
          setMatchResult([]);
          setLoading(true);

          const token = localStorage.getItem('accessToken');
          const response = await apiClient.get(`/match?m=${month}&d=${day}`, {
            headers: {
              Authorization: token,
            },
            withCredentials: true,
          });

          setMatches(response.data.matches);
          setMatchResult(response.data.match_result);
        } catch (error) {
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [selectedDate]);

  const onClickTeamName = (id: number | undefined, sport: 'SOCCER' | 'BADMINTON' | 'VOLLEYBALL') => {
    const sportName = sport.toLowerCase();
    navigate(`/matches/${sportName}/form/${id}`);
  };

  const formatMapping = () => {
    const currentTime = new Date();

    return matches.map((match) => {
      const sportType = match.match_type;
      const dateTimeString = match.match_start_at;
      const endTimeString = match.match_end_at;
      const teamGradeA = match.badminton_a_participate_names;
      const teamGradeB = match.badminton_b_participate_names;

      const dateTime = new Date(dateTimeString);
      const matchEnd = new Date(endTimeString);

      const hours = dateTime.getHours();
      const minutes = dateTime.getMinutes();

      const endHours = matchEnd.getHours();
      const endMinutes = matchEnd.getMinutes();

      const oneDayInMillis = 24 * 60 * 60 * 1000;
      const oneDayBefore = new Date(dateTime.getTime() - oneDayInMillis);

      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      const endFormatted = `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;

      const votingEnd = new Date(dateTime);
      votingEnd.setMinutes(votingEnd.getMinutes() - 5);
      const votingEndHours = votingEnd.getHours();
      const votingEndMinutes = votingEnd.getMinutes();
      const votingEndFormatted = `${votingEndHours.toString().padStart(2, '0')}:${votingEndMinutes.toString().padStart(2, '0')}`;

      let sportName = '';
      let gradeInfoA = '';
      let gradeInfoB = '';

      const getSportName = () => {
        if (sportType === 'BADMINTON') {
          sportName = '배드민턴';

          if (match.badminton_rank === 'D') {
            return (
              <S.EventTexts style={{ color: '#FFF' }}>
                여자 <br /> {sportName}
              </S.EventTexts>
            );
          } else {
            return (
              <S.EventTexts style={{ color: '#FFF' }}>
                {match.badminton_rank !== null ? `${match.badminton_rank}팀` : 'TBD'}
                <br />
                {sportName}
              </S.EventTexts>
            );
          }
        } else if (sportType === 'SOCCER') {
          sportName = '축구';
          return <S.EventTexts style={{ color: '#FFF' }}>{sportName}</S.EventTexts>;
        } else if (sportType === 'VOLLEYBALL') {
          sportName = '배구';
          return <S.EventTexts style={{ color: '#FFF' }}>{sportName}</S.EventTexts>;
        }
      };

      if (sportType === 'BADMINTON') {
        gradeInfoA = teamGradeA;
        gradeInfoB = teamGradeB;
      } else {
        if (match.team_a_class_type === 'SW') {
          gradeInfoA += 'SW';
        } else if (match.team_a_class_type === 'EB') {
          gradeInfoA += '임베';
        }
        if (match.team_a_grade === 'ONE') {
          gradeInfoA += ' 1학년';
        } else if (match.team_a_grade === 'TWO') {
          gradeInfoA += ' 2학년';
        } else if (match.team_a_grade === 'THREE') {
          gradeInfoA += ' 3학년';
        }
        if (match.team_b_class_type === 'SW') {
          gradeInfoB += 'SW';
        } else if (match.team_b_class_type === 'EB') {
          gradeInfoB += '임베';
        }
        if (match.team_b_grade === 'ONE') {
          gradeInfoB += ' 1학년';
        } else if (match.team_b_grade === 'TWO') {
          gradeInfoB += ' 2학년';
        } else if (match.team_b_grade === 'THREE') {
          gradeInfoB += ' 3학년';
        }
      }

      const getEventText = () => {
        if (match.match_level === 'FINAL') {
          return <S.EventTexts style={{ color: 'var(--Main, #23F69A)' }}>결승전🔥</S.EventTexts>;
        } else if (match.match_level === 'SEMI_FINAL') {
          return <S.EventTexts>본선</S.EventTexts>;
        } else if (match.match_level === 'TRYOUT') {
          return <S.EventTexts>예선</S.EventTexts>;
        }
      };

      const bettingClick = (match_id: number | undefined) => {
        if (match_id !== undefined) {
          setMatchId(match_id);
        }
      };

      const getUserVote = (match: Match) => {
        if (currentTime >= dateTime && currentTime <= matchEnd === true) {
          return (
            <>
              <S.VoteConatiner style={{ border: '1px solid var(--White, #FFF)' }}>
                <S.VoteText style={{ color: 'var(--White, #FFF)' }}>경기중</S.VoteText>
              </S.VoteConatiner>
            </>
          );
        } else if (match.is_vote === false && currentTime < votingEnd && currentTime > oneDayBefore === true) {
          return (
            <label
              onClick={() => {
                setModal(!modal);
                HandleModalOpen(match.team_a_name, match.team_b_name);
                ClickedSportsName(sportName);
                bettingClick(match.match_id);
              }}
              style={{ cursor: 'pointer' }}
            >
              <S.VoteConatiner style={{ background: 'var(--Main, #23F69A)' }}>
                <S.VoteText style={{ color: 'var(--Black, #1C1C1F)' }}>투표</S.VoteText>
              </S.VoteConatiner>
            </label>
          );
        } else if (match.is_vote === true) {
          return (
            <S.VoteConatiner style={{ border: '1px solid var(--colors-main-main-900, #045D36)' }}>
              <S.VoteText style={{ color: 'var(--colors-main-main-900, #045D36)' }}>완료</S.VoteText>
            </S.VoteConatiner>
          );
        } else {
          return (
            <S.VoteConatiner style={{ border: '1px solid var(--colors-gray-gray-800, #44444B)' }}>
              <S.VoteText style={{ color: 'var(--Gray2, #6F6F7B)' }}>투표</S.VoteText>
            </S.VoteConatiner>
          );
        }
      };

      return (
        <S.PlayingContainer
          key={match.match_id}
          style={{
            borderRadius: '0.75rem',
            background: 'var(--colors-gray-gray-900, #26262A)',
          }}
        >
          <S1.TeamImforContainer>
            <S.MainContainer>
              <S.EventContainer>
                {getEventText()}
                {getSportName()}
              </S.EventContainer>

              <S.GradeBox>
                <S.OneGrade key={match.team_a_id}>
                  <S.ForMedia>
                    {favoriteTeam === match.team_a_id ? (
                      <S.GradeContainer>
                        <S.HoverTeamName onClick={() => onClickTeamName(match.team_a_id, match.match_type)}>
                          {match.team_a_name}팀
                        </S.HoverTeamName>
                        <S.contour />
                        <S.TeamName1 style={{ color: 'var(--Main, #23F69A)' }}>
                          {match.team_a_bet.toLocaleString()}P{'  '}
                          {match.team_a_bet + match.team_b_bet === 0
                            ? '0'
                            : Math.floor((match.team_a_bet / (match.team_a_bet + match.team_b_bet)) * 100)}
                          %
                        </S.TeamName1>
                      </S.GradeContainer>
                    ) : (
                      <S.GradeContainer>
                        <S.TeamName onClick={() => onClickTeamName(match.team_a_id, match.match_type)}>
                          {match.team_a_name}팀
                        </S.TeamName>
                        <S.contour />
                        <S.TeamName1 style={{ color: '#FFF' }}>
                          {match.team_a_bet.toLocaleString()}P{'  '}
                          {match.team_a_bet + match.team_b_bet === 0
                            ? '0'
                            : Math.floor((match.team_a_bet / (match.team_a_bet + match.team_b_bet)) * 100)}
                          %
                        </S.TeamName1>
                      </S.GradeContainer>
                    )}
                  </S.ForMedia>
                  <S.GradeText1 style={{ color: 'var(--Gray2, #6F6F7B)' }}>{gradeInfoA}</S.GradeText1>
                </S.OneGrade>

                <S.OneGrade key={match.team_b_id}>
                  <S.ForMedia>
                    {favoriteTeam === match.team_b_id ? (
                      <S.GradeContainer>
                        <S.HoverTeamName onClick={() => onClickTeamName(match.team_b_id, match.match_type)}>
                          {match.team_b_name}팀
                        </S.HoverTeamName>
                        <S.contour />
                        <S.TeamName1 style={{ color: 'var(--Main, #23F69A)' }}>
                          {match.team_b_bet.toLocaleString()}P{'  '}
                          {match.team_a_bet + match.team_b_bet === 0
                            ? '0'
                            : Math.floor((match.team_b_bet / (match.team_a_bet + match.team_b_bet)) * 100)}
                          %
                        </S.TeamName1>
                      </S.GradeContainer>
                    ) : (
                      <S.GradeContainer>
                        <S.TeamName onClick={() => onClickTeamName(match.team_b_id, match.match_type)}>
                          {match.team_b_name}팀
                        </S.TeamName>
                        <S.contour />
                        <S.TeamName1 style={{ color: '#FFF' }}>
                          {match.team_b_bet.toLocaleString()}P{'  '}
                          {match.team_a_bet + match.team_b_bet === 0
                            ? '0'
                            : Math.floor((match.team_b_bet / (match.team_a_bet + match.team_b_bet)) * 100)}
                          %
                        </S.TeamName1>
                      </S.GradeContainer>
                    )}
                  </S.ForMedia>
                  <S.GradeText1 style={{ color: 'var(--Gray2, #6F6F7B)' }}>{gradeInfoB}</S.GradeText1>
                </S.OneGrade>
              </S.GradeBox>
            </S.MainContainer>

            <S.TimeContainer>
              <S.OneTimeBox>
                <S.TimeText1>투표</S.TimeText1>
                <S.TimeText1>
                  {formattedTime} ~ {votingEndFormatted}
                </S.TimeText1>
              </S.OneTimeBox>

              <S.OneTimeBox>
                <S.TimeText1>경기</S.TimeText1>
                <S.TimeText1>
                  {formattedTime} ~ {endFormatted}
                </S.TimeText1>
              </S.OneTimeBox>
            </S.TimeContainer>

            <div style={{ display: 'flex', justifyContent: 'center' }}>{getUserVote(match)}</div>
          </S1.TeamImforContainer>

          <div>
            {matches
              ?.filter((m) => match.match_id === m.match_id)

              ?.map((m) => {
                const matchId = m.match_id;
                const correspondingMatch = matches.find((match) => match.match_id === matchId);
                if (correspondingMatch && match.is_vote) {
                  return (
                    <S1.BattingImforContainer key={matchId}>
                      <S1.VoteStateContainer>
                        <S1.VoteStateTitle>내 투표</S1.VoteStateTitle>
                        <S1.VoteStateContents>
                          {correspondingMatch.bet_team_a_score} - {correspondingMatch.bet_team_b_score} ,{' '}
                          {correspondingMatch.bet_team_a_score != null &&
                            correspondingMatch.bet_team_b_score != null &&
                            (correspondingMatch.bet_team_a_score > correspondingMatch.bet_team_b_score
                              ? correspondingMatch.team_a_name
                              : correspondingMatch.team_b_name)}
                          의 승리
                        </S1.VoteStateContents>
                      </S1.VoteStateContainer>
                      <S1.VoteStatePoint>{correspondingMatch.bet_point?.toLocaleString()}P</S1.VoteStatePoint>
                    </S1.BattingImforContainer>
                  );
                } else {
                  return null;
                }
              })}
          </div>
        </S.PlayingContainer>
      );
    });
  };

  const formatResultMapping = () => {
    return matchResult.map((matchResult) => {
      const sportType = matchResult.match_type;
      const teamGradeA = matchResult.badminton_a_participate_names;
      const teamGradeB = matchResult.badminton_b_participate_names;

      let sportName = '';
      let gradeInfoA = '';
      let gradeInfoB = '';

      const matchResultScore = () => {
        if (matchResult.team_a_score > matchResult.team_b_score) {
          return (
            <S.MatchScoreContainer>
              <S.MatchScoreText style={{ color: 'var(--White, #FFF)' }}>{matchResult.team_a_score}</S.MatchScoreText>
              <S.MatchScoreText> - </S.MatchScoreText>
              <S.MatchScoreText>{matchResult.team_b_score}</S.MatchScoreText>
            </S.MatchScoreContainer>
          );
        } else if (matchResult.team_a_score < matchResult.team_b_score) {
          return (
            <S.MatchScoreContainer>
              <S.MatchScoreText>{matchResult.team_a_score}</S.MatchScoreText>
              <S.MatchScoreText> - </S.MatchScoreText>
              <S.MatchScoreText style={{ color: 'var(--White, #FFF)' }}>{matchResult.team_b_score}</S.MatchScoreText>
            </S.MatchScoreContainer>
          );
        }
      };

      const getSportName = () => {
        if (sportType === 'BADMINTON') {
          sportName = '배드민턴';

          if (matchResult.badminton_rank === 'D') {
            return (
              <S.EventTexts style={{ color: '#FFF' }}>
                여자 <br /> {sportName}
              </S.EventTexts>
            );
          } else {
            return (
              <S.EventTexts style={{ color: '#FFF' }}>
                {matchResult.badminton_rank}팀
                <br /> {sportName}
              </S.EventTexts>
            );
          }
        } else if (sportType === 'SOCCER') {
          sportName = '축구';
          return <S.EventTexts style={{ color: '#FFF' }}>{sportName}</S.EventTexts>;
        } else if (sportType === 'VOLLEYBALL') {
          sportName = '배구';
          return <S.EventTexts style={{ color: '#FFF' }}>{sportName}</S.EventTexts>;
        }
      };

      if (sportType === 'BADMINTON') {
        gradeInfoA = teamGradeA;
        gradeInfoB = teamGradeB;
      } else {
        if (matchResult.team_a_class_type === 'SW') {
          gradeInfoA += 'SW';
        } else if (matchResult.team_a_class_type === 'EB') {
          gradeInfoA += '임베';
        }
        if (matchResult.team_a_grade === 'ONE') {
          gradeInfoA += ' 1학년';
        } else if (matchResult.team_a_grade === 'TWO') {
          gradeInfoA += ' 2학년';
        } else if (matchResult.team_a_grade === 'THREE') {
          gradeInfoA += ' 3학년';
        }
        if (matchResult.team_b_class_type === 'SW') {
          gradeInfoB += 'SW';
        } else if (matchResult.team_b_class_type === 'EB') {
          gradeInfoB += '임베';
        }
        if (matchResult.team_b_grade === 'ONE') {
          gradeInfoB += ' 1학년';
        } else if (matchResult.team_b_grade === 'TWO') {
          gradeInfoB += ' 2학년';
        } else if (matchResult.team_b_grade === 'THREE') {
          gradeInfoB += ' 3학년';
        }
      }

      const getEventText = () => {
        if (matchResult.match_level === 'FINAL') {
          return <S.EventTexts style={{ color: 'var(--Main, #23F69A)' }}>결승전🔥</S.EventTexts>;
        } else if (matchResult.match_level === 'SEMI_FINAL') {
          return <S.EventTexts>본선</S.EventTexts>;
        } else if (matchResult.match_level === 'TRYOUT') {
          return <S.EventTexts>예선</S.EventTexts>;
        }
      };

      return (
        <S.PredictContainer
          key={matchResult.match_id}
          style={{
            background: 'var(--colors-gray-gray-900, #26262A)',
          }}
        >
          <S.PlayingContainer
            style={{
              borderRadius: '0.75rem',
              background: 'var(--colors-gray-gray-900, #26262A)',
              padding: '0',
              width: '100%',
            }}
          >
            <S.MainContainer>
              <S.matchResultContainer>
                <S.EventContainer>
                  {getEventText()}
                  {getSportName()}
                </S.EventContainer>
                <S.GradeBox>
                  <S.OneGrade key={matchResult.team_a_id}>
                    <S.ForMedia>
                      {favoriteTeam === matchResult.team_a_id ? (
                        <S.GradeContainer>
                          <S.HoverTeamName
                            onClick={() => onClickTeamName(matchResult.team_a_id, matchResult.match_type)}
                          >
                            {matchResult.team_a_name}팀
                          </S.HoverTeamName>
                          <S.TeamName1 style={{ color: 'var(--Main, #23F69A)' }}>
                            {Math.floor(
                              (matchResult.team_a_bet / (matchResult.team_a_bet + matchResult.team_b_bet)) * 100
                            )}
                            %
                          </S.TeamName1>
                        </S.GradeContainer>
                      ) : (
                        <S.GradeContainer>
                          <S.TeamName onClick={() => onClickTeamName(matchResult.team_a_id, matchResult.match_type)}>
                            {matchResult.team_a_name}팀
                          </S.TeamName>
                          <S.TeamName1 style={{ color: '#FFF' }}>
                            {Math.floor(
                              (matchResult.team_a_bet / (matchResult.team_a_bet + matchResult.team_b_bet)) * 100
                            )}
                            %
                          </S.TeamName1>
                        </S.GradeContainer>
                      )}
                    </S.ForMedia>
                    <S.GradeText2 style={{ color: 'var(--Gray2, #6F6F7B)' }}>{gradeInfoA}</S.GradeText2>
                  </S.OneGrade>

                  <S.OneGrade key={matchResult.team_b_id}>
                    <S.ForMedia>
                      {favoriteTeam === matchResult.team_b_id ? (
                        <S.GradeContainer>
                          <S.HoverTeamName
                            onClick={() => onClickTeamName(matchResult.team_b_id, matchResult.match_type)}
                          >
                            {matchResult.team_b_name}팀
                          </S.HoverTeamName>
                          <S.TeamName1 style={{ color: 'var(--Main, #23F69A)' }}>
                            {Math.floor(
                              (matchResult.team_b_bet / (matchResult.team_a_bet + matchResult.team_b_bet)) * 100
                            )}
                            %
                          </S.TeamName1>
                        </S.GradeContainer>
                      ) : (
                        <S.GradeContainer>
                          <S.TeamName onClick={() => onClickTeamName(matchResult.team_b_id, matchResult.match_type)}>
                            {matchResult.team_b_name}팀
                          </S.TeamName>
                          <S.TeamName1 style={{ color: '#FFF' }}>
                            {Math.floor(
                              (matchResult.team_b_bet / (matchResult.team_a_bet + matchResult.team_b_bet)) * 100
                            )}
                            %
                          </S.TeamName1>
                        </S.GradeContainer>
                      )}
                    </S.ForMedia>
                    <S.GradeText2 style={{ color: 'var(--Gray2, #6F6F7B)' }}>{gradeInfoB}</S.GradeText2>
                  </S.OneGrade>
                </S.GradeBox>
              </S.matchResultContainer>
              <S.MatchResultContainer>
                <S.MatchResultText>경기 결과</S.MatchResultText>
                {matchResultScore()}
              </S.MatchResultContainer>
            </S.MainContainer>
          </S.PlayingContainer>

          {matchResult.is_participate_team_id !== null ? (
            <S.PlayingContainer
              style={{
                borderRadius: '0.75rem',
                background: 'var(--colors-gray-gray-900, #26262A)',
                paddingTop: '1.5rem',
                padding: '0',
              }}
            >
              <S.UnderTextBox>
                <S.WinORLosestyled>
                  {matchResult.team_a_id === matchResult.is_participate_team_id ? (
                    matchResult.team_a_score > matchResult.team_b_score ? (
                      <S.EventTexts style={{ color: 'var(--Main, #23F69A)' }}>승리</S.EventTexts>
                    ) : (
                      <S.EventTexts style={{ color: 'var(--Main, #DF454A)' }}>패배</S.EventTexts>
                    )
                  ) : matchResult.team_b_id === matchResult.is_participate_team_id ? (
                    matchResult.team_b_score > matchResult.team_a_score ? (
                      <S.EventTexts style={{ color: 'var(--Main, #23F69A)' }}>승리</S.EventTexts>
                    ) : (
                      <S.EventTexts style={{ color: 'var(--Main, #DF454A)' }}>패배</S.EventTexts>
                    )
                  ) : (
                    '참가 팀을 찾을 수 없음'
                  )}
                </S.WinORLosestyled>

                <S.PredictPointBox>
                  <S.EventContainer>
                    {(matchResult.team_a_id === matchResult.is_participate_team_id ||
                      matchResult.team_b_id === matchResult.is_participate_team_id) &&
                    matchResult.participate_earned_point === 0 ? (
                      <S.GradeText2 style={{ color: 'var(--Error, #DF454A)' }}>
                        +{matchResult.participate_earned_point.toLocaleString()}P
                      </S.GradeText2>
                    ) : (
                      <S.GradeText2 style={{ color: 'var(--Main, #23F69A)' }}>
                        +{matchResult.participate_earned_point.toLocaleString()}P
                      </S.GradeText2>
                    )}
                  </S.EventContainer>
                </S.PredictPointBox>
              </S.UnderTextBox>
            </S.PlayingContainer>
          ) : null}

          {matchResult.bet_team_a_score === null || matchResult.bet_team_b_score === null ? (
            <></>
          ) : (
            <S.PlayingContainer
              style={{
                borderRadius: '0.75rem',
                background: 'var(--colors-gray-gray-900, #26262A)',
                paddingTop: '1.5rem',
                padding: '0',
                width: '100%',
              }}
            >
              <S.UnderTextBox>
                <S.WinORLosestyled>
                  {matchResult.bet_team_a_score === matchResult.team_a_score &&
                  matchResult.bet_team_b_score === matchResult.team_b_score ? (
                    <S.EventTexts style={{ color: 'var(--Main, #23F69A)' }}>대성공🔥</S.EventTexts>
                  ) : (
                    <>
                      {(matchResult.bet_team_a_score > matchResult.bet_team_b_score &&
                        matchResult.team_a_score > matchResult.team_b_score) ||
                      (matchResult.bet_team_a_score < matchResult.bet_team_b_score &&
                        matchResult.team_a_score < matchResult.team_b_score) ? (
                        <S.EventTexts style={{ color: 'var(--colors-main-main-200, #A7FBD7)' }}>성공</S.EventTexts>
                      ) : (
                        <S.EventTexts style={{ color: 'var(--Error, #DF454A)' }}>실패</S.EventTexts>
                      )}
                    </>
                  )}
                  <S.PercentBar>
                    <S.PredictText style={{ fontWeight: '400' }}>내 예측 투표</S.PredictText>
                    <S.PredictText style={{ fontWeight: '600' }}>
                      {matchResult.bet_team_a_score} - {matchResult.bet_team_b_score}
                    </S.PredictText>
                  </S.PercentBar>
                </S.WinORLosestyled>

                <S.PredictPointBox>
                  <S.EventContainer>
                    <S.PredictScoreBox>
                      <S.GradeText1 style={{ color: 'var(--Gray1, #B7B7BE)' }}>점수 예측</S.GradeText1>
                      {matchResult.team_a_score === matchResult.bet_team_a_score &&
                      matchResult.team_b_score === matchResult.bet_team_b_score ? (
                        <S.GradeText1 style={{ color: 'var(--White, #FFF)' }}>성공</S.GradeText1>
                      ) : (
                        <S.GradeText1 style={{ color: 'var(--Gray2, #6F6F7B)' }}>실패</S.GradeText1>
                      )}
                    </S.PredictScoreBox>
                    <S.PredictScoreBox>
                      <S.GradeText1 style={{ color: 'var(--Gray1, #B7B7BE)' }}>승패 예측</S.GradeText1>
                      {matchResult.team_a_score > matchResult.team_b_score ==
                      matchResult.bet_team_a_score > matchResult.bet_team_b_score ? (
                        <S.GradeText1 style={{ color: 'var(--White, #FFF)' }}>성공</S.GradeText1>
                      ) : (
                        <S.GradeText1 style={{ color: 'var(--Gray2, #6F6F7B)' }}>실패</S.GradeText1>
                      )}
                    </S.PredictScoreBox>

                    {matchResult.team_a_score > matchResult.team_b_score ==
                    matchResult.bet_team_a_score > matchResult.bet_team_b_score ? (
                      <S.GradeText2 style={{ color: 'var(--Main, #23F69A)' }}>
                        +{matchResult.earned_point.toLocaleString()}P
                      </S.GradeText2>
                    ) : (
                      <S.GradeText2 style={{ color: 'var(--Error, #DF454A)' }}>
                        -{matchResult.lose_point.toLocaleString()}P
                      </S.GradeText2>
                    )}
                  </S.EventContainer>
                </S.PredictPointBox>
              </S.UnderTextBox>
            </S.PlayingContainer>
          )}
        </S.PredictContainer>
      );
    });
  };

  return (
    <>
      {modal ? (
        <S.ModalBackground>
          <S.ModalContainer>
            <S.ModalTextWrapper>
              <S.ModalTextContainer>
                <S.ModalTitle>
                  <S.ModalTitleContainer>
                    {selectedSports} 경기에 투표 하시겠습니까?
                    {selectedSports == '배드민턴' && selectedDate.getDate() >= 23 && (
                      <div>예선, 본선은 25점 내기 단판입니다.</div>
                    )}
                    {selectedSports !== '배드민턴' && <div>투표 방식은 세트 스코어 입니다.</div>}
                  </S.ModalTitleContainer>
                </S.ModalTitle>
                <S.ModalNovelContainer>
                  <S.ModalNovel>
                    {nextModal === false ? (
                      <>
                        {selectedTeam} 팀의 <br />
                        경기 결과를 예측해 투표해 주세요.
                      </>
                    ) : (
                      <>예측한 결과에 걸 포인트를 입력해주세요</>
                    )}
                  </S.ModalNovel>
                </S.ModalNovelContainer>
              </S.ModalTextContainer>
              {nextModal === false ? (
                <S.ModalInputContainer>
                  <S.ModalInput name="TeamA" maxLength={2} type="text" value={teamA} onChange={onChangeInput} />
                  <S.ModalInputText>:</S.ModalInputText>
                  <S.ModalInput name="TeamB" maxLength={2} type="text" value={teamB} onChange={onChangeInput} />
                </S.ModalInputContainer>
              ) : (
                <S.ModalPointContainer>
                  <S.ModalPointInput
                    type="text"
                    placeholder="마이너스 불가능"
                    maxLength={24}
                    value={point}
                    onChange={onPointInput}
                  />
                  <S.PText>P</S.PText>
                </S.ModalPointContainer>
              )}

              {sameInput && <S.ModalInputError>무승부 베팅은 불가능 합니다.</S.ModalInputError>}
            </S.ModalTextWrapper>
            <S.ModalButtonContainer>
              <S.ModalCencleButton
                onClick={() => {
                  setModal(!modal);
                  setTeamA('');
                  setTeamB('');
                  setPoint('');
                  setSameInput(false);
                  setNextModal(false);
                }}
              >
                아니오
              </S.ModalCencleButton>
              {nextModal === false ? (
                <S.ModalCheerButton onClick={handleButton}>다음</S.ModalCheerButton>
              ) : (
                <S.ModalCheerButton onClick={() => handleBettingClick(matchId, teamA, teamB, point)}>
                  베팅하기
                </S.ModalCheerButton>
              )}
            </S.ModalButtonContainer>
          </S.ModalContainer>
        </S.ModalBackground>
      ) : null}
      <S.WeatherWrapper>
        {dates.map((date, index) => (
          <S.DateContainer
            key={index}
            onClick={() => handleDateClick(date)}
            selected={date.getDate() === selectedDate.getDate()}
          >
            <S.DayText>{dayOfWeek[index]}</S.DayText>
            <S.DayText>{date.getDate()}일</S.DayText>
          </S.DateContainer>
        ))}
      </S.WeatherWrapper>

      <S.MainContainers>
        {loading === true ? (
          <LoadingContent />
        ) : (
          <>
            {matches.length === 0 && matchResult.length === 0 ? (
              <S.SvgContainer>
                <EmptyPlaying />
              </S.SvgContainer>
            ) : (
              <>
                {formatMapping()}
                {formatResultMapping()}
              </>
            )}
          </>
        )}
      </S.MainContainers>
      {matches.length === 0 && matchResult.length === 0 ? (
        <></>
      ) : (
        <S.BottomText>
          <S.TimeText2>출전하는 경기에는 투표할 수 없으며 경기 승리 시 포인트를 받을 수 있습니다</S.TimeText2>
        </S.BottomText>
      )}
      <ToastContainer autoClose={1000} />
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </>
  );
};

export default PlayContainer;
