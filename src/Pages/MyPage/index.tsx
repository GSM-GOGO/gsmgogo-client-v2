import { useEffect, useState } from 'react';
import apiClient from '../../utils/libs/apiClient';
import { Stroke } from '../../assets';
import * as S from './style';
import { MatchData, MatchResultData, MatchResponse } from '../../types/MatchData';
import { FilterType, SelectSportsType, SetSelectBattingType, matchLevelType } from '../../types/MyPageFilter';
import FilterComponent from '../../components/MyPageFilter';
import { calculateBattingCondition } from '../../utils/libs/battingFilter';
import { getGradeAndClass, getMatchEvent } from '../../utils/libs/myPage';
import MyPageLogout from '../../components/MyPageLogout';

const MyPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);
  const [selectSports, setSelectSports] = useState<SelectSportsType | null>(null);
  const [selectBatting, setSelectBatting] = useState<SetSelectBattingType | null>(null);
  const [matches, setMatches] = useState<MatchData[] | MatchResultData[]>([]);
  const [matchResult, setMatchResult] = useState<MatchResultData[]>([]);

  useEffect(() => {
    const matchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await apiClient.get<MatchResponse>(`/user/match`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setMatches(response.data.matches);
        setMatchResult(response.data.match_result);
      } catch (e) {}
    };

    matchData();
  }, []);

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  const handleSports = (sports: SelectSportsType | null) => {
    if (selectSports === sports) {
      setSelectSports(null);
    } else if (sports === null) {
      setSelectSports(null);
    } else {
      setSelectSports(sports);
    }
  };

  const handleBatting = (batting: SetSelectBattingType | null) => {
    if (selectBatting === batting) {
      setSelectBatting(null);
    } else if (batting === null) {
      setSelectBatting(null);
    } else {
      setSelectBatting(batting);
    }
  };

  const getMatchState = (match: MatchData) => {
    const currentTime = new Date();
    const dateTimeString = match.match_start_at;
    const endTimeString = match.match_end_at;
    const matchStartTime = new Date(dateTimeString);
    const matchEndTime = new Date(endTimeString);

    if (currentTime < matchStartTime) {
      return <S.MatchStateV2>투표 완료</S.MatchStateV2>;
    } else if (currentTime >= matchStartTime && currentTime <= matchEndTime) {
      return <S.MatchStateV1>경기중</S.MatchStateV1>;
    } else {
      return <S.MatchStateV1>정산중</S.MatchStateV1>;
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <S.HeaderCotainer>
            <MyPageLogout />
            <FilterComponent
              activeFilter={activeFilter}
              handleFilterClick={handleFilterClick}
              selectSports={selectSports}
              handleSports={handleSports}
              selectBatting={selectBatting}
              handleBatting={handleBatting}
            />
          </S.HeaderCotainer>
          <S.MatchListWrapper>
            {activeFilter !== 'batting' &&
              selectBatting === null &&
              matches
                .filter((matches) => (selectSports ? matches.match_type === selectSports : true))
                .map((matches) => (
                  <S.MatchListContainer key={matches.match_id}>
                    <S.TeamImforContainer>
                      <S.MatchBattingImforContainer>
                        <S.TeamImforTitleContainer>
                          <S.MatchType>{matchLevelType[matches.match_type]}</S.MatchType>
                          <S.MatchEvent>{getMatchEvent(matches)}</S.MatchEvent>
                        </S.TeamImforTitleContainer>
                        <S.TeamBattingContainer>
                          <S.TeamBattingText>
                            <S.TeamName>{matches.team_a_name}</S.TeamName>
                            <Stroke />
                            <S.Point>{matches.team_a_bet.toLocaleString()}P</S.Point>
                            <S.Percent>
                              {matches.team_a_bet + matches.team_b_bet === 0
                                ? '0'
                                : Math.floor((matches.team_a_bet / (matches.team_a_bet + matches.team_b_bet)) * 100)}
                              %
                            </S.Percent>
                            <S.Department>
                              {getGradeAndClass(matches.team_a_grade, matches.team_a_class_type)}
                            </S.Department>
                          </S.TeamBattingText>
                          <S.TeamBattingText>
                            <S.TeamName>{matches.team_b_name}</S.TeamName>
                            <Stroke />
                            <S.Point>{matches.team_b_bet.toLocaleString()}P</S.Point>
                            <S.Percent>
                              {matches.team_a_bet + matches.team_b_bet === 0
                                ? '0'
                                : Math.floor((matches.team_b_bet / (matches.team_a_bet + matches.team_b_bet)) * 100)}
                              %
                            </S.Percent>
                            <S.Department>
                              {getGradeAndClass(matches.team_b_grade, matches.team_b_class_type)}
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
                          {matches.bet_team_a_score} - {matches.bet_team_b_score},{' '}
                          {matches.bet_team_a_score != null &&
                            matches.bet_team_b_score != null &&
                            (matches.bet_team_a_score > matches.bet_team_b_score
                              ? matches.team_a_name
                              : matches.team_b_name)}
                          의 승리
                        </S.VoteStateContents>
                      </S.VoteStateContainer>
                      <S.VoteStatePoint>{matches.bet_point?.toLocaleString()}P</S.VoteStatePoint>
                    </S.BattingImforContainer>
                  </S.MatchListContainer>
                ))}

            {matchResult
              .filter((matchResult) => (selectSports ? matchResult.match_type === selectSports : true))
              .filter((matchResult) => (selectBatting ? calculateBattingCondition(matchResult, selectBatting) : true))
              .reverse()
              .map((matchResult) => (
                <S.MatchListContainer key={matchResult.match_id}>
                  <S.TeamImforContainer>
                    <S.MatchBattingImforContainer>
                      <S.TeamImforTitleContainer>
                        <S.MatchType>{matchLevelType[matchResult.match_type]}</S.MatchType>
                        <S.MatchEvent>{getMatchEvent(matchResult)}</S.MatchEvent>
                      </S.TeamImforTitleContainer>
                      <S.TeamBattingContainer>
                        <S.TeamBattingText>
                          <S.TeamName>{matchResult.team_a_name}</S.TeamName>
                          <Stroke />
                          <S.Point>{matchResult.team_a_bet.toLocaleString()}P</S.Point>
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
                              {getGradeAndClass(matchResult.team_a_grade, matchResult.team_a_class_type)}
                            </S.Department>
                          </S.Department>
                        </S.TeamBattingText>
                        <S.TeamBattingText>
                          <S.TeamName>{matchResult.team_b_name}</S.TeamName>
                          <Stroke />
                          <S.Point>{matchResult.team_b_bet.toLocaleString()}P</S.Point>
                          <S.Percent>
                            {matchResult.team_a_bet + matchResult.team_b_bet === 0
                              ? '0'
                              : Math.floor(
                                  (matchResult.team_b_bet / (matchResult.team_a_bet + matchResult.team_b_bet)) * 100
                                )}
                            %
                          </S.Percent>
                          <S.Department>
                            {getGradeAndClass(matchResult.team_b_grade, matchResult.team_b_class_type)}
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
                            +{matchResult.earned_point?.toLocaleString()}P
                          </S.BattingResultPoint>
                        ) : (
                          <S.BattingResultPoint style={{ color: 'var(--Error, #DF454A)' }}>
                            -{matchResult.lose_point?.toLocaleString()}P
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
