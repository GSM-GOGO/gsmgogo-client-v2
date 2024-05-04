import React, { useState } from 'react';
import apiClient from '../../utils/libs/apiClient';
import { DeleteIcon, DisabledFilterIcon, LogoutIcon, SelectFilterIcon, Stroke } from '../../assets';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

type FilterType = 'sports' | 'batting';
type SelectSportsType = 'soccer' | 'badminton' | 'volleyball';
type SetSelectBattingType = 'greatSuccess' | 'success' | 'failure';

const SPORTS_LABELS: Record<SelectSportsType, string> = {
  soccer: '축구',
  badminton: '배드민턴',
  volleyball: '배구',
};

const BATTING_LABELS: Record<SetSelectBattingType, string> = {
  greatSuccess: '대성공🔥',
  success: '성공',
  failure: '실패',
};

const MyPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);
  const [selectSports, setSelectSports] = useState<SelectSportsType | null>(null);
  const [selectBatting, setSelectBatting] = useState<SetSelectBattingType | null>(null);

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      await apiClient.delete(`/auth/logout`, {
        headers: {
          Authorization: accessToken,
        },
        withCredentials: true,
      });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/signin');
    } catch (e) {}
  };

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

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <S.HeaderCotainer>
            <S.FirstHeaderContainer>
              <S.FirstHeaderTitleContainer>
                <S.FirstHeaderTitleContainerResponse>
                  <S.Title>마이페이지</S.Title>
                  <S.UserText>1111 홍길동</S.UserText>
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
                      성공 여부 필터
                    </S.FilterV1>
                  ) : (
                    <S.FilterV2 onClick={() => handleFilterClick('batting')}>
                      <DisabledFilterIcon />
                      성공 여부 필터
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
                  {(['badminton', 'soccer', 'volleyball'] as SelectSportsType[]).map((sport: SelectSportsType) => (
                    <React.Fragment key={sport}>
                      {selectSports === sport ? (
                        <S.SelectFilter onClick={() => handleSports(sport)}>{SPORTS_LABELS[sport]}</S.SelectFilter>
                      ) : (
                        <S.DisabledSelectFilter onClick={() => handleSports(sport)}>
                          {SPORTS_LABELS[sport]}
                        </S.DisabledSelectFilter>
                      )}
                    </React.Fragment>
                  ))}
                </S.SelectFilterContainer>
              )}
              {activeFilter === 'batting' && (
                <S.SelectFilterContainer>
                  {(['greatSuccess', 'success', 'failure'] as SetSelectBattingType[]).map(
                    (batting: SetSelectBattingType) => (
                      <React.Fragment key={batting}>
                        {selectBatting === batting ? (
                          <S.SelectFilter onClick={() => handleBatting(batting)}>
                            {BATTING_LABELS[batting]}
                          </S.SelectFilter>
                        ) : (
                          <S.DisabledSelectFilter onClick={() => handleBatting(batting)}>
                            {BATTING_LABELS[batting]}
                          </S.DisabledSelectFilter>
                        )}
                      </React.Fragment>
                    )
                  )}
                </S.SelectFilterContainer>
              )}
            </S.FilterContainer>
          </S.HeaderCotainer>
          <S.MatchListWrapper>
            <S.MatchListContainer>
              <S.TeamImforContainer>
                <S.MatchBattingImforContainer>
                  <S.TeamImforTitleContainer>
                    <S.MatchType>예선</S.MatchType>
                    <S.MatchEvent>
                      점심 여자
                      <br />
                      배드민턴
                    </S.MatchEvent>
                  </S.TeamImforTitleContainer>
                  <S.TeamBattingContainer>
                    <S.TeamBattingText>
                      <S.TeamName>어쩌구저쩌구팀</S.TeamName>
                      <Stroke />
                      <S.Point>380,000P</S.Point>
                      <S.Percent>64%</S.Percent>
                      <S.Department>2학년 SW</S.Department>
                    </S.TeamBattingText>
                    <S.TeamBattingText>
                      <S.TeamName>어쩌구저쩌구팀</S.TeamName>
                      <Stroke />
                      <S.Point>380,000P</S.Point>
                      <S.Percent>36%</S.Percent>
                      <S.Department>1학년 임베</S.Department>
                    </S.TeamBattingText>
                  </S.TeamBattingContainer>
                </S.MatchBattingImforContainer>
                <S.MatchResultContainer>
                  <S.MatchResultTitle>경기 결과</S.MatchResultTitle>
                  <S.MatchScore>3 - 1</S.MatchScore>
                </S.MatchResultContainer>
              </S.TeamImforContainer>
              <S.BattingImforContainer>
                <S.BattingResultHeaderContainer>
                  <S.BattingResultHeaderTitle>성공</S.BattingResultHeaderTitle>
                  <S.MatchPredictionContainer>
                    <S.MatchPredictionTitle>예측 투표</S.MatchPredictionTitle>
                    <S.MatchPredictionScore>2 - 1</S.MatchPredictionScore>
                  </S.MatchPredictionContainer>
                </S.BattingResultHeaderContainer>
                <S.BattingResultBodyContainer>
                  <S.BattingResultContainer>
                    <S.BattingResultContents>
                      <S.BattingResultTitle>점수 예측</S.BattingResultTitle>
                      <S.BattingResult color="#6F6F7B">실패</S.BattingResult>
                    </S.BattingResultContents>
                    <S.BattingResultContents>
                      <S.BattingResultTitle>승패 예측</S.BattingResultTitle>
                      <S.BattingResult color="#23F69A">성공</S.BattingResult>
                    </S.BattingResultContents>
                  </S.BattingResultContainer>
                  <S.BattingResultPoint>+30,000P</S.BattingResultPoint>
                </S.BattingResultBodyContainer>
              </S.BattingImforContainer>
            </S.MatchListContainer>

            <S.MatchListContainer>
              <S.TeamImforContainer>
                <S.MatchBattingImforContainer>
                  <S.TeamImforTitleContainer>
                    <S.MatchType>예선</S.MatchType>
                    <S.MatchEvent>
                      점심 여자
                      <br />
                      배드민턴
                    </S.MatchEvent>
                  </S.TeamImforTitleContainer>
                  <S.TeamBattingContainer>
                    <S.TeamBattingText>
                      <S.TeamName>어쩌구저쩌구팀</S.TeamName>
                      <Stroke />
                      <S.Point>380,000P</S.Point>
                      <S.Percent>64%</S.Percent>
                      <S.Department>2학년 SW</S.Department>
                    </S.TeamBattingText>
                    <S.TeamBattingText>
                      <S.TeamName>어쩌구저쩌구팀</S.TeamName>
                      <Stroke />
                      <S.Point>380,000P</S.Point>
                      <S.Percent>36%</S.Percent>
                      <S.Department>1학년 임베</S.Department>
                    </S.TeamBattingText>
                  </S.TeamBattingContainer>
                </S.MatchBattingImforContainer>
                <S.MatchResultContainer>
                  <S.MatchStateV1>경기중</S.MatchStateV1>
                </S.MatchResultContainer>
              </S.TeamImforContainer>
              <S.BattingImforContainer>
                <S.VoteStateContainer>
                  <S.VoteStateTitle>내 투표</S.VoteStateTitle>
                  <S.VoteStateContents>3 - 1, 어쩌고저쩌고팀의 승리</S.VoteStateContents>
                </S.VoteStateContainer>
                <S.VoteStatePoint>30,000P</S.VoteStatePoint>
              </S.BattingImforContainer>
            </S.MatchListContainer>

            <S.MatchListContainer>
              <S.TeamImforContainer>
                <S.MatchBattingImforContainer>
                  <S.TeamImforTitleContainer>
                    <S.MatchType>예선</S.MatchType>
                    <S.MatchEvent>
                      점심 여자
                      <br />
                      배드민턴
                    </S.MatchEvent>
                  </S.TeamImforTitleContainer>
                  <S.TeamBattingContainer>
                    <S.TeamBattingText>
                      <S.TeamName>어쩌구저쩌구팀</S.TeamName>
                      <Stroke />
                      <S.Point>380,000P</S.Point>
                      <S.Percent>64%</S.Percent>
                      <S.Department>2학년 SW</S.Department>
                    </S.TeamBattingText>
                    <S.TeamBattingText>
                      <S.TeamName>어쩌구저쩌구팀</S.TeamName>
                      <Stroke />
                      <S.Point>380,000P</S.Point>
                      <S.Percent>36%</S.Percent>
                      <S.Department>1학년 임베</S.Department>
                    </S.TeamBattingText>
                  </S.TeamBattingContainer>
                </S.MatchBattingImforContainer>
                <S.MatchResultContainer>
                  <S.MatchStateV2>투표 완료</S.MatchStateV2>
                </S.MatchResultContainer>
              </S.TeamImforContainer>
              <S.BattingImforContainer>
                <S.VoteStateContainer>
                  <S.VoteStateTitle>내 투표</S.VoteStateTitle>
                  <S.VoteStateContents>3 - 1, 어쩌고저쩌고팀의 승리</S.VoteStateContents>
                </S.VoteStateContainer>
                <S.VoteStatePoint>30,000P</S.VoteStatePoint>
              </S.BattingImforContainer>
            </S.MatchListContainer>
          </S.MatchListWrapper>
        </S.ContainerResponse>
      </S.Container>
    </S.Wrapper>
  );
};

export default MyPage;
