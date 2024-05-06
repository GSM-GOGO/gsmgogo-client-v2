import { useEffect, useState } from 'react';
import apiClient from '../../utils/libs/apiClient';
import { DeleteIcon, DisabledFilterIcon, LogoutIcon, SelectFilterIcon, Stroke } from '../../assets';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { MatchData, MatchResultData, MatchResponse } from '../../types/MatchData';
import {
  FilterType,
  SelectSportsType,
  SetSelectBattingType,
  SPORTS_LABELS,
  BATTING_LABELS,
  matchLevelType,
} from '../../types/MyPageFilter';

const MyPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);
  const [selectSports, setSelectSports] = useState<SelectSportsType | null>(null);
  const [selectBatting, setSelectBatting] = useState<SetSelectBattingType | null>(null);
  const [matches, setMatches] = useState<MatchData[]>([]);
  const [matchResult, setMatchResult] = useState<MatchResultData[]>([]);

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      await apiClient.delete(`/auth/logout`, {
        headers: {
          Authorization: accessToken!,
        },
        withCredentials: true,
      });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/signin');
    } catch (e) {}
  };

  useEffect(() => {
    const matchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await apiClient.get<MatchResponse>(`/user/match`, {
          headers: {
            Authorization: `${token}`,
          },
        });

        const formattedMatches = response.data.matches.map((match) => ({
          ...match,
          match_start_at: new Date(match.match_start_at).toLocaleString(),
          match_end_at: new Date(match.match_end_at).toLocaleString(),
        }));

        setMatches(formattedMatches);
        setMatchResult(response.data.match_result);
      } catch (e) {}
    };

    matchData();
  }, []);
  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  const handleSports = (sports: SelectSportsType) => {
    if (selectSports === sports) {
      setSelectSports(null);
    } else {
      setSelectSports(sports);
    }
  };

  const handleBatting = (batting: SetSelectBattingType) => {
    if (selectBatting === batting) {
      setSelectBatting(null);
    } else {
      setSelectBatting(batting);
    }
  };

  const getMatchState = (match: MatchData) => {
    const currentTime = new Date().getTime();
    const matchStartTime = new Date(match.match_start_at).getTime();
    const matchEndTime = new Date(match.match_end_at).getTime();

    if (currentTime < matchStartTime) {
      return <S.MatchStateV2>투표 완료</S.MatchStateV2>;
    } else if (currentTime >= matchStartTime && currentTime <= matchEndTime) {
      return <S.MatchStateV1>경기중</S.MatchStateV1>;
    } else {
      return <S.MatchStateV1>정산중</S.MatchStateV1>;
    }
  };

  const calculateBattingCondition = (matchResult: MatchResultData, selectBatting: SetSelectBattingType): boolean => {
    if (selectBatting === 'greatSuccess') {
      return (
        (matchResult.bet_team_a_score ?? 0) === (matchResult.team_a_score ?? 0) &&
        (matchResult.bet_team_b_score ?? 0) === (matchResult.team_b_score ?? 0)
      );
    } else if (selectBatting === 'success') {
      return (
        ((matchResult.bet_team_a_score ?? 0) > (matchResult.bet_team_b_score ?? 0) &&
          (matchResult.team_a_score ?? 0) > (matchResult.team_b_score ?? 0)) ||
        ((matchResult.bet_team_a_score ?? 0) < (matchResult.bet_team_b_score ?? 0) &&
          (matchResult.team_a_score ?? 0) < (matchResult.team_b_score ?? 0))
      );
    } else if (selectBatting === 'failure') {
      return !(
        ((matchResult.bet_team_a_score ?? 0) === (matchResult.team_a_score ?? 0) &&
          (matchResult.bet_team_b_score ?? 0) === (matchResult.team_b_score ?? 0)) ||
        ((matchResult.bet_team_a_score ?? 0) > (matchResult.bet_team_b_score ?? 0) &&
          (matchResult.team_a_score ?? 0) > (matchResult.team_b_score ?? 0)) ||
        ((matchResult.bet_team_a_score ?? 0) < (matchResult.bet_team_b_score ?? 0) &&
          (matchResult.team_a_score ?? 0) < (matchResult.team_b_score ?? 0))
      );
    }
    return true;
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <S.HeaderCotainer>
            <S.FirstHeaderContainer>
              <S.FirstHeaderTitleContainer>
                <S.FirstHeaderTitleContainerResponse>
                  <S.Title>마이페이지</S.Title>
                </S.FirstHeaderTitleContainerResponse>
              </S.FirstHeaderTitleContainer>
              <S.LogoutContainer onClick={handleLogout}>
                <S.LogoutContainerResponse>
                  <LogoutIcon />
                  <S.LogoutText>로그아웃</S.LogoutText>
                </S.LogoutContainerResponse>
              </S.LogoutContainer>
            </S.FirstHeaderContainer>
            <S.FilterContainer>
              <S.FixedFilterContainer>
                <S.FixedFilter>
                  {activeFilter === 'sports' ? (
                    <S.FilterV1 onClick={() => handleFilterClick('sports')}>
                      <SelectFilterIcon />
                      종목 필터
                    </S.FilterV1>
                  ) : (
                    <S.FilterV2 onClick={() => handleFilterClick('sports')}>
                      <DisabledFilterIcon />
                      종목 필터
                    </S.FilterV2>
                  )}

                  {activeFilter === 'batting' ? (
                    <S.FilterV1 onClick={() => handleFilterClick('batting')}>
                      <SelectFilterIcon />
                      성공 필터
                    </S.FilterV1>
                  ) : (
                    <S.FilterV2 onClick={() => handleFilterClick('batting')}>
                      <DisabledFilterIcon />
                      성공 필터
                    </S.FilterV2>
                  )}
                </S.FixedFilter>
                <S.ViewSelectFilterContainer>
                  {selectSports && (
                    <S.ViewSelectFilter onClick={() => setSelectSports(null)}>
                      {SPORTS_LABELS[selectSports]}
                      <DeleteIcon />
                    </S.ViewSelectFilter>
                  )}
                  {selectBatting && (
                    <S.ViewSelectFilter onClick={() => setSelectBatting(null)}>
                      {BATTING_LABELS[selectBatting]}
                      <DeleteIcon />
                    </S.ViewSelectFilter>
                  )}
                </S.ViewSelectFilterContainer>
              </S.FixedFilterContainer>
              {activeFilter === 'sports' && (
                <S.SelectFilterContainer>
                  {(['BADMINTON', 'SOCCER', 'VOLLEYBALL'] as SelectSportsType[]).map((sport: SelectSportsType) =>
                    selectSports === sport ? (
                      <S.SelectFilter key={sport} onClick={() => handleSports(sport)}>
                        {SPORTS_LABELS[sport]}
                      </S.SelectFilter>
                    ) : (
                      <S.DisabledSelectFilter key={sport} onClick={() => handleSports(sport)}>
                        {SPORTS_LABELS[sport]}
                      </S.DisabledSelectFilter>
                    )
                  )}
                </S.SelectFilterContainer>
              )}
              {activeFilter === 'batting' && (
                <S.SelectFilterContainer>
                  {(['greatSuccess', 'success', 'failure'] as SetSelectBattingType[]).map(
                    (batting: SetSelectBattingType) =>
                      selectBatting === batting ? (
                        <S.SelectFilter key={batting} onClick={() => handleBatting(batting)}>
                          {BATTING_LABELS[batting]}
                        </S.SelectFilter>
                      ) : (
                        <S.DisabledSelectFilter key={batting} onClick={() => handleBatting(batting)}>
                          {BATTING_LABELS[batting]}
                        </S.DisabledSelectFilter>
                      )
                  )}
                </S.SelectFilterContainer>
              )}
            </S.FilterContainer>
          </S.HeaderCotainer>
          <S.MatchListWrapper>
            {matches
              .filter((matches) => (selectSports ? matches.match_type === selectSports : true))
              .map((matches) => (
                <S.MatchListContainer>
                  <S.TeamImforContainer>
                    <S.MatchBattingImforContainer>
                      <S.TeamImforTitleContainer>
                        <S.MatchType>{matchLevelType[matches.match_type]}</S.MatchType>
                        <S.MatchEvent>
                          {matches.badminton_rank === 'D' ? '여자 ' : '남자 '}
                          {(() => {
                            switch (matches.match_type) {
                              case 'SOCCER':
                                return '축구';
                              case 'BADMINTON':
                                return '배드민턴';
                              case 'VOLLEYBALL':
                                return '배구';
                              default:
                                return '';
                            }
                          })()}
                        </S.MatchEvent>
                      </S.TeamImforTitleContainer>
                      <S.TeamBattingContainer>
                        <S.TeamBattingText>
                          <S.TeamName>{matches.team_a_name}</S.TeamName>
                          <Stroke />
                          <S.Point>{matches.team_a_bet}P</S.Point>
                          <S.Percent>
                            {matches.team_a_bet + matches.team_b_bet === 0
                              ? '0'
                              : Math.floor((matches.team_a_bet / (matches.team_a_bet + matches.team_b_bet)) * 100)}
                            %
                          </S.Percent>
                          <S.Department>
                            {(() => {
                              switch (matches.team_a_grade) {
                                case 'ONE':
                                  return '1학년';
                                case 'TWO':
                                  return '2학년';
                                case 'THREE':
                                  return '3학년';
                                default:
                                  return '';
                              }
                            })()}{' '}
                            {matches.team_a_class_type === 'SW'
                              ? 'SW'
                              : matches.team_a_class_type === 'EB'
                                ? '임베'
                                : ''}
                          </S.Department>
                        </S.TeamBattingText>
                        <S.TeamBattingText>
                          <S.TeamName>{matches.team_b_name}</S.TeamName>
                          <Stroke />
                          <S.Point>{matches.team_b_bet}P</S.Point>
                          <S.Percent>
                            {matches.team_a_bet + matches.team_b_bet === 0
                              ? '0'
                              : Math.floor((matches.team_b_bet / (matches.team_a_bet + matches.team_b_bet)) * 100)}
                            %
                          </S.Percent>
                          <S.Department>
                            {(() => {
                              switch (matches.team_b_grade) {
                                case 'ONE':
                                  return '1학년';
                                case 'TWO':
                                  return '2학년';
                                case 'THREE':
                                  return '3학년';
                                default:
                                  return '';
                              }
                            })()}{' '}
                            {matches.team_b_class_type === 'SW'
                              ? 'SW'
                              : matches.team_b_class_type === 'EB'
                                ? '임베'
                                : ''}
                          </S.Department>
                        </S.TeamBattingText>
                      </S.TeamBattingContainer>
                    </S.MatchBattingImforContainer>
                    <S.MatchResultContainer>{getMatchState(matches)}</S.MatchResultContainer>
                  </S.TeamImforContainer>
                  <S.BattingImforContainer>
                    <S.VoteStateContainer>
                      <S.VoteStateTitle>내 투표</S.VoteStateTitle>
                      <S.VoteStateContents>
                        {matches.bet_team_a_score} - {matches.bet_team_b_score},
                        {matches.bet_team_a_score &&
                          matches.bet_team_b_score &&
                          (matches.bet_team_a_score > matches.bet_team_b_score
                            ? matches.team_a_name
                            : matches.team_b_name)}
                        의 승리
                      </S.VoteStateContents>
                    </S.VoteStateContainer>
                    <S.VoteStatePoint>{matches.bet_point}P</S.VoteStatePoint>
                  </S.BattingImforContainer>
                </S.MatchListContainer>
              ))}

            {matchResult
              .filter((matchResult) => (selectSports ? matchResult.match_type === selectSports : true))
              .filter((matchResult) => (selectBatting ? calculateBattingCondition(matchResult, selectBatting) : true))
              .map((matchResult) => (
                <S.MatchListContainer>
                  <S.TeamImforContainer>
                    <S.MatchBattingImforContainer>
                      <S.TeamImforTitleContainer>
                        <S.MatchType>{matchLevelType[matchResult.match_type]}</S.MatchType>
                        <S.MatchEvent>
                          {matchResult.badminton_rank === 'D' ? '여자 ' : '남자 '}
                          {(() => {
                            switch (matchResult.match_type) {
                              case 'SOCCER':
                                return '축구';
                              case 'BADMINTON':
                                return '배드민턴';
                              case 'VOLLEYBALL':
                                return '배구';
                              default:
                                return '';
                            }
                          })()}
                        </S.MatchEvent>
                      </S.TeamImforTitleContainer>
                      <S.TeamBattingContainer>
                        <S.TeamBattingText>
                          <S.TeamName>{matchResult.team_a_name}</S.TeamName>
                          <Stroke />
                          <S.Point>{matchResult.team_a_bet}P</S.Point>
                          <S.Percent>
                            {matchResult.team_a_bet + matchResult.team_b_bet === 0
                              ? '0'
                              : Math.floor(
                                  (matchResult.team_a_bet / (matchResult.team_a_bet + matchResult.team_b_bet)) * 100
                                )}
                            %
                          </S.Percent>
                          <S.Department>
                            <S.Department>
                              {(() => {
                                switch (matchResult.team_a_grade) {
                                  case 'ONE':
                                    return '1학년';
                                  case 'TWO':
                                    return '2학년';
                                  case 'THREE':
                                    return '3학년';
                                  default:
                                    return '';
                                }
                              })()}{' '}
                              {matchResult.team_a_class_type === 'SW'
                                ? 'SW'
                                : matchResult.team_a_class_type === 'EB'
                                  ? '임베'
                                  : ''}
                            </S.Department>
                          </S.Department>
                        </S.TeamBattingText>
                        <S.TeamBattingText>
                          <S.TeamName>{matchResult.team_b_name}</S.TeamName>
                          <Stroke />
                          <S.Point>{matchResult.team_b_bet}P</S.Point>
                          <S.Percent>
                            {matchResult.team_a_bet + matchResult.team_b_bet === 0
                              ? '0'
                              : Math.floor(
                                  (matchResult.team_b_bet / (matchResult.team_a_bet + matchResult.team_b_bet)) * 100
                                )}
                            %
                          </S.Percent>
                          <S.Department>
                            {(() => {
                              switch (matchResult.team_b_grade) {
                                case 'ONE':
                                  return '1학년';
                                case 'TWO':
                                  return '2학년';
                                case 'THREE':
                                  return '3학년';
                                default:
                                  return '';
                              }
                            })()}{' '}
                            {matchResult.team_b_class_type === 'SW'
                              ? 'SW'
                              : matchResult.team_b_class_type === 'EB'
                                ? '임베'
                                : ''}
                          </S.Department>
                        </S.TeamBattingText>
                      </S.TeamBattingContainer>
                    </S.MatchBattingImforContainer>
                    <S.MatchResultContainer>
                      <S.MatchResultTitle>경기 결과</S.MatchResultTitle>
                      <S.MatchScore>
                        {matchResult.team_a_score} - {matchResult.team_b_score}
                      </S.MatchScore>
                    </S.MatchResultContainer>
                  </S.TeamImforContainer>
                  <S.BattingImforContainer>
                    <S.BattingResultHeaderContainer>
                      {matchResult &&
                      (matchResult.bet_team_a_score ?? 0) === (matchResult.team_a_score ?? 0) &&
                      (matchResult.bet_team_b_score ?? 0) === (matchResult.team_b_score ?? 0) ? (
                        <S.BattingResultHeaderTitle style={{ color: 'var(--Main, #23F69A)' }}>
                          대성공🔥
                        </S.BattingResultHeaderTitle>
                      ) : (
                        <>
                          {((matchResult.bet_team_a_score ?? 0) > (matchResult.bet_team_b_score ?? 0) &&
                            (matchResult.team_a_score ?? 0) > (matchResult.team_b_score ?? 0)) ||
                          ((matchResult.bet_team_a_score ?? 0) < (matchResult.bet_team_b_score ?? 0) &&
                            (matchResult.team_a_score ?? 0) < (matchResult.team_b_score ?? 0)) ? (
                            <S.BattingResultHeaderTitle style={{ color: 'var(--colors-main-main-200, #A7FBD7)' }}>
                              성공
                            </S.BattingResultHeaderTitle>
                          ) : (
                            <S.BattingResultHeaderTitle style={{ color: 'var(--Error, #DF454A)' }}>
                              실패
                            </S.BattingResultHeaderTitle>
                          )}
                        </>
                      )}
                      <S.MatchPredictionContainer>
                        <S.MatchPredictionTitle>예측 투표</S.MatchPredictionTitle>
                        <S.MatchPredictionScore>
                          {matchResult.bet_team_a_score} - {matchResult.bet_team_b_score}
                        </S.MatchPredictionScore>
                      </S.MatchPredictionContainer>
                    </S.BattingResultHeaderContainer>
                    <S.BattingResultBodyContainer>
                      <S.BattingResultContainer>
                        <S.BattingResultContents>
                          <S.BattingResultTitle>점수 예측</S.BattingResultTitle>
                          {matchResult.team_a_score === matchResult.bet_team_a_score &&
                          matchResult.team_b_score === matchResult.bet_team_b_score ? (
                            <S.BattingResult color="#23F69A">성공</S.BattingResult>
                          ) : (
                            <S.BattingResult color="#6F6F7B">실패</S.BattingResult>
                          )}
                        </S.BattingResultContents>
                        <S.BattingResultContents>
                          <S.BattingResultTitle>승패 예측</S.BattingResultTitle>
                          {matchResult.bet_team_a_score !== null && matchResult.bet_team_b_score !== null && (
                            <>
                              {matchResult.team_a_score! > matchResult.team_b_score! ===
                              matchResult.bet_team_a_score! > matchResult.bet_team_b_score! ? (
                                <S.BattingResult color="#23F69A">성공</S.BattingResult>
                              ) : (
                                <S.BattingResult color="#6F6F7B">실패</S.BattingResult>
                              )}
                            </>
                          )}
                        </S.BattingResultContents>
                      </S.BattingResultContainer>
                      {matchResult.bet_team_a_score !== null &&
                        matchResult.bet_team_b_score !== null &&
                        matchResult.bet_team_a_score !== undefined &&
                        matchResult.bet_team_b_score !== undefined &&
                        (matchResult.team_a_score > matchResult.team_b_score ===
                        matchResult.bet_team_a_score > matchResult.bet_team_b_score ? (
                          <S.BattingResultPoint style={{ color: 'var(--Main, #23F69A)' }}>
                            +{matchResult.earned_point}P
                          </S.BattingResultPoint>
                        ) : (
                          <S.BattingResultPoint style={{ color: 'var(--Error, #DF454A)' }}>
                            -{matchResult.lose_point}P
                          </S.BattingResultPoint>
                        ))}
                    </S.BattingResultBodyContainer>
                  </S.BattingImforContainer>
                </S.MatchListContainer>
              ))}
          </S.MatchListWrapper>
        </S.ContainerResponse>
      </S.Container>
    </S.Wrapper>
  );
};

export default MyPage;
