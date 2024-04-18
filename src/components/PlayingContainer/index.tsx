import * as S from './style';
// import { PlayingButton, Vote, NotVote, PercentGuageBar } from '../../assets';
// import { ArrayProps } from '../../types/ArrayProps';
// import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useMemo, useState, useCallback } from 'react';
import apiClient from '../../utils/libs/apiClient';

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
  badminton_a_participate_names: string; // 신희성/신희성
  badminton_b_participate_names: string;
  match_start_at: string; // Format: "0000-00-00T00:00:00"
  match_end_at: string; // Format: "0000-00-00T00:00:00"
  is_vote: boolean;
  team_a_bet: number;
  team_b_bet: number;
}

interface MatchResult extends Match {
  team_a_score: number;
  team_b_score: number;
  bet_team_a_score?: number;
  bet_team_b_score?: number;
  earned_point?: number;
  lose_point?: number;
}

const PlayContainer = () =>
  // {
  //   isPredictGame,
  //   isFinal,
  //   SportsName,
  //   TeamName,
  //   Grade,
  //   Time,
  //   isLive,
  //   isVoting,
  //   isFavorite,
  //   isFinish,
  //   Winning,
  //   Percent,
  //   Score,
  //   PredictScore,
  //   isPredict,
  //   BettingPoint,
  // }
  {
    // const [matches, setMatches] = useState<Match[]>([]);
    // const [matchResult, setMatchResult] = useState<MatchResult>([]);
    // const selectedDate = new Date(date);

    // const month = selectedDate.getMonth() + 1;
    // const day = selectedDate.getDate();
    // console.log(month, day);

    // useEffect(() => {
    //   const fetchData = async (m: number, d: number) => {
    //     try {
    //       const token = localStorage.getItem('accessToken');
    //       const response = await apiClient.get(`/match?m=${m}&d=${d}`, {
    //         headers: {
    //           Authorization: token,
    //         },
    //         withCredentials: true,
    //       });
    //       setMatches(response.data.matches);
    //       setMatchResult(response.data.match_result);
    //     } catch (error) {
    //       console.log('데이터를 불러오는 중 에러가 발생했습니다.');
    //     }
    //   };

    //   if (date) {
    //     const selectedDate = new Date(date);
    //     const month = selectedDate.getMonth() + 1;
    //     const day = selectedDate.getDate();
    //     fetchData(month, day);
    //   } else {
    //     const today = new Date();
    //     const month = today.getMonth() + 1;
    //     const day = today.getDate();
    //     fetchData(month, day);
    //   }
    // }, [day, month]);

    // console.log(matches);
    // console.log(matchResult);

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
    const [isPlaying, setIsPlaying] = useState(false);
    const [vote, setVote] = useState(false);

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
          .then(() => {})
          .catch((error) => {
            if (error.response && error.response.status === 400) {
              const errorMessage = error.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
              toast.error(errorMessage, { autoClose: 1000 });
            } else {
              const errorMessage = error.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
              toast.error(errorMessage, { autoClose: 1000 });
            }
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

            const token = localStorage.getItem('accessToken');
            const response = await apiClient.get(`/match?m=${month}&d=${day}`, {
              headers: {
                Authorization: token,
              },
              withCredentials: true,
            });

            setMatches(response.data.matches);
            setMatchResult(response.data.match_result);
          } catch (error) {}
        };

        fetchData();
      }
    }, [selectedDate]);

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

        const oneDayInMillis = 24 * 60 * 60 * 1000; // 하루의 밀리초 수
        const oneDayBefore = new Date(dateTime.getTime() - oneDayInMillis);

        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        const endFormatted = `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;

        const votingEnd = new Date(dateTime);
        votingEnd.setMinutes(votingEnd.getMinutes() - 5);
        const votingEndHours = votingEnd.getHours();
        const votingEndMinutes = votingEnd.getMinutes();
        const votingEndFormatted = `${votingEndHours.toString().padStart(2, '0')}:${votingEndMinutes.toString().padStart(2, '0')}`;

        if (currentTime >= dateTime && currentTime <= matchEnd) {
          setIsPlaying(true);
        }

        if (currentTime < votingEnd && currentTime > oneDayBefore) {
          setVote(true);
        }

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
                  {match.badminton_rank}팀
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
          if (isPlaying === true) {
            return (
              <>
                <S.VoteConatiner style={{ border: '1px solid var(--White, #FFF)' }}>
                  <S.VoteText style={{ color: 'var(--White, #FFF)' }}>경기중</S.VoteText>
                </S.VoteConatiner>
              </>
            );
          } else if (match.is_vote === false && vote === true) {
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
            <S.MainContainer>
              <S.EventContainer>
                {getEventText()}
                {getSportName()}
              </S.EventContainer>

              <S.GradeBox>
                <S.OneGrade key={match.team_a_id}>
                  <S.ForMedia>
                    <S.GradeContainer>
                      <S.TeamName style={{ color: '#FFF' }}>{match.team_a_name}팀</S.TeamName>
                      <S.TeamName style={{ color: '#FFF' }}>{match.team_a_bet}%</S.TeamName>
                    </S.GradeContainer>
                  </S.ForMedia>
                  <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>{gradeInfoA}</S.GradeText>
                </S.OneGrade>

                <S.OneGrade key={match.team_b_id}>
                  <S.ForMedia>
                    <S.GradeContainer>
                      <S.TeamName style={{ color: '#FFF' }}>{match.team_b_name}팀</S.TeamName>
                      <S.TeamName style={{ color: '#FFF' }}>{match.team_b_bet}%</S.TeamName>
                    </S.GradeContainer>
                  </S.ForMedia>
                  <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>{gradeInfoB}</S.GradeText>
                </S.OneGrade>
              </S.GradeBox>
            </S.MainContainer>

            <S.TimeContainer>
              <S.OneTimeBox>
                <S.TimeText>투표</S.TimeText>
                <S.TimeText>
                  {formattedTime} ~ {votingEndFormatted}
                </S.TimeText>
              </S.OneTimeBox>

              <S.OneTimeBox>
                <S.TimeText>경기</S.TimeText>
                <S.TimeText>
                  {formattedTime} ~ {endFormatted}
                </S.TimeText>
              </S.OneTimeBox>
            </S.TimeContainer>

            <div style={{ display: 'flex', justifyContent: 'center' }}>{getUserVote(match)}</div>
          </S.PlayingContainer>
        );
      });
    };

    // const SuccesOfFail = () => {
    //   if (predictScore0 === score0 && predictScore1 === score1) {
    //     return <S.EventTexts style={{ color: 'var(--Main, #23F69A)' }}>대성공🔥</S.EventTexts>;
    //   } else if (
    //     (predictScore0 > predictScore1 && score0 > score1) ||
    //     (predictScore0 < predictScore1 && score0 < score1)
    //   ) {
    //     return <S.EventTexts style={{ color: 'var(--colors-main-main-200, #A7FBD7)' }}>성공</S.EventTexts>;
    //   } else {
    //     return <S.EventTexts style={{ color: 'var(--Error, #DF454A)' }}>실패</S.EventTexts>;
    //   }
    // };

    // const FormatBettingPoint = (BettingPoint: string) => {
    //   return BettingPoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // };

    return (
      <>
        {modal ? (
          <S.ModalBackground>
            <S.ModalContainer>
              <S.ModalTextWrapper>
                <S.ModalTextContainer>
                  <S.ModalTitle>
                    <S.ModalTitleContainer>{selectedSports} 경기에 투표 하시겠습니까?</S.ModalTitleContainer>
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

                {sameInput && <S.ModalInputError>무승부 배팅은 불가능 합니다.</S.ModalInputError>}
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
          {formatMapping()}

          <>
            {/* {isPredict ? (
              <S.PredictContainer>
                <S.PlayingContainer>
                  <S.MainContainer>
                    <S.EventTexts style={{ color: 'var(--White, #FFF)' }}>{SportsName}</S.EventTexts>

                    <S.GradeBox>
                      <S.OneGrade>
                        {Winning[0] === true ? (
                          <S.EventTexts style={{ color: 'var(--White, #FFF)' }}>{TeamName[0]}</S.EventTexts>
                        ) : (
                          <S.EventTexts style={{ color: 'var(--Gray2, #6F6F7B)' }}>{TeamName[0]}</S.EventTexts>
                        )}
                        <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>{Grade[0]}</S.GradeText>
                      </S.OneGrade>

                      <S.OneGrade>
                        <S.EventTexts>
                          {Winning[1] === true ? (
                            <S.EventTexts style={{ color: 'var(--White, #FFF)' }}>{TeamName[1]}</S.EventTexts>
                          ) : (
                            <S.EventTexts style={{ color: 'var(--Gray2, #6F6F7B)' }}>{TeamName[1]}</S.EventTexts>
                          )}
                        </S.EventTexts>
                        <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>{Grade[1]}</S.GradeText>
                      </S.OneGrade>
                    </S.GradeBox>
                  </S.MainContainer>

                  <S.PercentBar>
                    <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>{Percent[0]}</S.GradeText>
                    <PercentGuageBar percent={Percent[0]} />

                    <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>{Percent[1]}</S.GradeText>
                  </S.PercentBar>

                  {parseInt(Score[0]) > parseInt(Score[1]) === true ? (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <S.GradeText style={{ color: 'var(--White, #FFF)' }}>{Score[0]}</S.GradeText>
                      <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>-</S.GradeText>
                      <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>{Score[1]}</S.GradeText>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>{Score[0]}</S.GradeText>
                      <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>-</S.GradeText>
                      <S.GradeText style={{ color: 'var(--White, #FFF)' }}>{Score[1]}</S.GradeText>
                    </div>
                  )}
                </S.PlayingContainer>

                <S.PlayingContainer>
                  <S.UnderTextBox>
                    <S.WinORLosestyled>
                      {SuccesOfFail()}

                      <S.PercentBar>
                        <S.PredictText style={{ fontWeight: '400' }}>예측 투표</S.PredictText>
                        <S.PredictText style={{ fontWeight: '600' }}>
                          {PredictScore[0]} - {PredictScore[1]}
                        </S.PredictText>
                      </S.PercentBar>
                    </S.WinORLosestyled>

                    <S.PredictPointBox>
                      <S.EventContainer>
                        <S.PredictScoreBox>
                          <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>점수 예측</S.GradeText>
                          {predictScore0 === score0 && predictScore1 === score1 ? (
                            <S.GradeText style={{ color: 'var(--White, #FFF)' }}>성공</S.GradeText>
                          ) : (
                            <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>실패</S.GradeText>
                          )}
                        </S.PredictScoreBox>

                        <S.PredictScoreBox>
                          <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>승리 예측</S.GradeText>
                          {(predictScore0 > predictScore1 && score0 > score1) ||
                          (predictScore0 < predictScore1 && score0 < score1) ? (
                            <S.GradeText style={{ color: 'var(--White, #FFF)' }}>성공</S.GradeText>
                          ) : (
                            <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>실패</S.GradeText>
                          )}
                        </S.PredictScoreBox>
                      </S.EventContainer>

                      {(predictScore0 > predictScore1 && score0 > score1) ||
                      (predictScore0 < predictScore1 && score0 < score1) ? (
                        <S.GradeText style={{ color: 'var(--Main, #23F69A)' }}>
                          +{FormatBettingPoint(BettingPoint)}P
                        </S.GradeText>
                      ) : (
                        <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>
                          -{FormatBettingPoint(BettingPoint)}P
                        </S.GradeText>
                      )}
                    </S.PredictPointBox>
                  </S.UnderTextBox>
                </S.PlayingContainer>
              </S.PredictContainer>
            ) : (
              <S.PredictContainer>
                <S.PlayingContainer>
                  <S.MainContainer>
                    <S.EventTexts style={{ color: 'var(--White, #FFF)' }}>{SportsName}</S.EventTexts>

                    <S.GradeBox>
                      <S.OneGrade>
                        {Winning[0] === true ? (
                          <S.EventTexts style={{ color: 'var(--White, #FFF)' }}>{TeamName[0]}</S.EventTexts>
                        ) : (
                          <S.EventTexts style={{ color: 'var(--Gray2, #6F6F7B)' }}>{TeamName[0]}</S.EventTexts>
                        )}
                        <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>{Grade[0]}</S.GradeText>
                      </S.OneGrade>

                      <S.OneGrade>
                        <S.EventTexts>
                          {Winning[1] === true ? (
                            <S.EventTexts style={{ color: 'var(--White, #FFF)' }}>{TeamName[1]}</S.EventTexts>
                          ) : (
                            <S.EventTexts style={{ color: 'var(--Gray2, #6F6F7B)' }}>{TeamName[1]}</S.EventTexts>
                          )}
                        </S.EventTexts>
                        <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>{Grade[1]}</S.GradeText>
                      </S.OneGrade>
                    </S.GradeBox>
                  </S.MainContainer>

                  <S.PercentBar>
                    <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>{Percent[0]}</S.GradeText>

                    <PercentGuageBar percent={Percent[0]} />

                    <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>{Percent[1]}</S.GradeText>
                  </S.PercentBar>

                  {parseInt(Score[0]) > parseInt(Score[1]) === true ? (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <S.GradeText style={{ color: 'var(--White, #FFF)' }}>{Score[0]}</S.GradeText>
                      <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>-</S.GradeText>
                      <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>{Score[1]}</S.GradeText>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>{Score[0]}</S.GradeText>
                      <S.GradeText style={{ color: 'var(--Gray1, #B7B7BE)' }}>-</S.GradeText>
                      <S.GradeText style={{ color: 'var(--White, #FFF)' }}>{Score[1]}</S.GradeText>
                    </div>
                  )}
                </S.PlayingContainer>
              </S.PredictContainer>
            )} */}
          </>
        </S.MainContainers>
        <S.BottomText>
          <S.TimeText>출전하는 경기에는 투표할 수 없으며 경기 승리 시 포인트를 받을 수 있습니다</S.TimeText>
        </S.BottomText>
        <ToastContainer autoClose={1000} />
        <div>
          <Toaster position="top-right" reverseOrder={true} />
        </div>
      </>
    );
  };

export default PlayContainer;
