import * as S from './style';
import { PlayingButton, Vote, NotVote, PercentGuageBar } from '../../assets';
// import { ArrayProps } from '../../types/ArrayProps';
// import { useState } from 'react';

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

const PlayContainer = ({ date }: { date: Date }) =>
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

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [matches, setMatches] = useState<Match[]>([]);
    const [matchResult, setMatchResult] = useState<MatchResult>([]);

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

    // 선택한 날짜가 변경될 때마다 실행되는 useEffect
    useEffect(() => {
      if (selectedDate) {
        const month = selectedDate.getMonth() + 1; // 월 추출
        const day = selectedDate.getDate(); // 일 추출

        // API 요청 보내기
        const fetchData = async () => {
          try {
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

        fetchData(); // fetchData 함수 호출
      }
    }, [selectedDate]);

    const formatMapping = () => {
      return matches.map((match) => {
        const sportType = match.match_type;
        let sportName = '';
        if (sportType === 'BADMINTON') {
          sportName = '배드민턴';
        } else if (sportType === 'SOCCER') {
          sportName = '축구';
        } else if (sportType === 'VOLLEYBALL') {
          sportName = '배구';
        }
        // match_start_at에서 오는 날짜 및 시간 문자열
        const dateTimeString = match.match_start_at;
        const endTimeString = match.match_end_at;

        // ISO 8601 형식으로 파싱하여 JavaScript Date 객체 생성
        const dateTime = new Date(dateTimeString);
        const matchEnd = new Date(endTimeString);

        // 시간과 분 추출
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();

        const endHours = matchEnd.getHours();
        const endMinutes = matchEnd.getMinutes();

        // 시간과 분을 두 자리 숫자로 포맷팅
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        const endFormatted = `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;

        const votingStart = new Date(dateTime);
        votingStart.setMinutes(votingStart.getMinutes() - 5);
        const votingStartHours = votingStart.getHours();
        const votingStartMinutes = votingStart.getMinutes();
        const votingStartFormatted = `${votingStartHours.toString().padStart(2, '0')}:${votingStartMinutes.toString().padStart(2, '0')}`;
        // 변환된 시간을 반환하거나 필요한 곳에 사용할 수 있음

        const getEventText = () => {
          if (match.match_level === 'FINAL') {
            return <S.EventTexts style={{ color: 'var(--Main, #23F69A)' }}>결승전🔥</S.EventTexts>;
          } else if (match.match_level === 'SEMI_FINAL') {
            return <S.EventTexts>본선</S.EventTexts>;
          } else if (match.match_level === 'TRYOUT') {
            return <S.EventTexts>예선</S.EventTexts>;
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
                <S.EventTexts style={{ color: '#FFF' }}>{sportName}</S.EventTexts>
              </S.EventContainer>

              <S.GradeBox>
                <S.OneGrade key={match.team_a_id}>
                  <S.ForMedia>
                    <S.TeamName style={{ color: '#FFF' }}>{match.team_a_name}팀</S.TeamName>
                  </S.ForMedia>
                  <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>{match.team_a_grade}</S.GradeText>
                </S.OneGrade>

                <S.OneGrade key={match.team_b_id}>
                  <S.ForMedia>
                    <S.TeamName style={{ color: '#FFF' }}>{match.team_b_name}팀</S.TeamName>
                  </S.ForMedia>
                  <S.GradeText style={{ color: 'var(--Gray2, #6F6F7B)' }}>{match.team_a_grade}</S.GradeText>
                </S.OneGrade>
              </S.GradeBox>
            </S.MainContainer>

            <S.TimeContainer>
              <S.OneTimeBox>
                <S.TimeText>투표</S.TimeText>
                <S.TimeText>
                  {formattedTime} ~ {votingStartFormatted}
                </S.TimeText>
              </S.OneTimeBox>

              <S.OneTimeBox>
                <S.TimeText>경기</S.TimeText>
                <S.TimeText>
                  {formattedTime} ~ {endFormatted}
                </S.TimeText>
              </S.OneTimeBox>
            </S.TimeContainer>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {/* {isLive ? (
                  <PlayingButton />
                ) : isVoting ? ( */}
              <label
                // onClick={() => {
                //   setModal(!modal);
                //   HandleModalOpen(TeamName);
                //   ClickedSportsName(SportsName);
                // }}
                style={{ cursor: 'pointer' }}
              >
                <Vote />
              </label>
              {/* ) : (
                  <NotVote />
                )} */}
            </div>
          </S.PlayingContainer>
        );
      });
    };

    // const startTime = new Date(matches.match_start_at); // 문자열을 Date 객체로 변환
    // const hours = startTime.getHours(); // 시간 추출
    // const minutes = startTime.getMinutes(); // 분 추출
    // const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    // const [modal, setModal] = useState(false);
    // const [teamA, setTeamA] = useState('');
    // const [teamB, setTeamB] = useState('');
    // const [sameInput, setSameInput] = useState(false);
    // const [selectedTeam, setSelectedTeam] = useState('');
    // const [selectedSports, setSelectedSports] = useState('');

    // const predictScore0 = parseInt(PredictScore[0]);
    // const predictScore1 = parseInt(PredictScore[1]);
    // const score0 = parseInt(Score[0]);
    // const score1 = parseInt(Score[1]);

    // const onChangeInput = (e: { target: { name: string; value: string } }) => {
    //   const {
    //     target: { name, value },
    //   } = e;

    //   const filteredInput = value.replace(/\D/g, '');

    //   if (name === 'TeamA') {
    //     setTeamA(filteredInput);
    //   } else if (name === 'TeamB') {
    //     setTeamB(filteredInput);
    //   }
    // };

    // const handleButton = () => {
    //   if (teamA === teamB && teamA !== '' && teamB !== '') {
    //     setSameInput(true);
    //   } else if (teamA !== '' && teamB !== '') {
    //     setSameInput(false);
    //   }
    // };

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

    // const HandleModalOpen = (TeamName: string[]) => {
    //   setSelectedTeam(`${TeamName[0]} - ${TeamName[1]}`);
    //   setModal(true);
    // };

    // const ClickedSportsName = (SportsName: string) => {
    //   setSelectedSports(`${SportsName}`);
    // };

    return (
      <>
        {/* {modal ? (
          <S.ModalBackground>
            <S.ModalContainer>
              <S.ModalTextWrapper>
                <S.ModalTextContainer>
                  <S.ModalTitle>
                    <S.ModalTitleContainer>{selectedSports} 경기에 투표 하시겠습니까?</S.ModalTitleContainer>
                  </S.ModalTitle>
                  <S.ModalNovelContainer>
                    <S.ModalNovel>{selectedTeam} 팀의 경기 결과를 예측해 투표해 주세요.</S.ModalNovel>
                  </S.ModalNovelContainer>
                </S.ModalTextContainer>
                <S.ModalInputContainer>
                  <S.ModalInput name="TeamA" maxLength={2} type="text" value={teamA} onChange={onChangeInput} />
                  <S.ModalInputText>:</S.ModalInputText>
                  <S.ModalInput name="TeamB" maxLength={2} type="text" value={teamB} onChange={onChangeInput} />
                </S.ModalInputContainer>
                {sameInput && <S.ModalInputError>무승부 배팅은 불가능 합니다.</S.ModalInputError>}
              </S.ModalTextWrapper>
              <S.ModalButtonContainer>
                <S.ModalCencleButton
                  onClick={() => {
                    setModal(!modal);
                    setTeamA('');
                    setTeamB('');
                    setSameInput(false);
                  }}
                >
                  아니오
                </S.ModalCencleButton>
                <S.ModalCheerButton
                // onClick={handleButton}
                >
                  투표하기
                </S.ModalCheerButton>
              </S.ModalButtonContainer>
            </S.ModalContainer>
          </S.ModalBackground>
        ) : null} */}
        <S.WeatherWrapper>
          {dates.map((date, index) => (
            <S.DateContainer
              key={index}
              onClick={() => handleDateClick(date)}
              selected={selectedDate === date || (selectedDate === null && index === 0)}
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
      </>
    );
  };

export default PlayContainer;
