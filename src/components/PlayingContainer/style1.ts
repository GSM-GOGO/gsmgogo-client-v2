import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 40.5rem;
`;
export const ContainerResponse = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const HeaderCotainer = styled.div`
  margin-top: 20px;
  margin-bottom: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (max-width: 650px) {
    padding: 0 24px;
    box-sizing: border-box;
  }
`;

export const MatchListWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  margin-bottom: 3.9375rem;

  @media screen and (max-width: 650px) {
    padding: 0 24px;
  }
`;

export const MatchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #26262a;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-sizing: border-box;
  gap: 1.5rem;

  @media screen and (max-width: 570px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TeamImforContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MatchBattingImforContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 570px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TeamImforTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MatchType = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;
  margin: 0;

  color: #b7b7be;
  @media screen and (max-width: 570px) {
    font-size: 0.75rem;
  }
`;

export const MatchEvent = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;
  margin: 0;
  color: #fff;

  @media screen and (max-width: 570px) {
    font-size: 0.75rem;
  }
`;

export const TeamBattingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media screen and (max-width: 570px) {
    gap: 0.25rem;
  }
`;

export const TeamBattingText = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const TeamName = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;

  color: #fff;
  margin: 0;

  @media screen and (max-width: 570px) {
    font-size: 0.75rem;
  }
`;

export const Point = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
  color: #fff;
  margin: 0;

  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
  }
`;

export const Percent = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin: 0;

  color: #b7b7be;

  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
  }
`;

export const Department = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin: 0;

  color: #6f6f7b;
  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
  }
`;

export const MatchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media screen and (max-width: 570px) {
    align-self: self-start;
    gap: 0;
  }
`;

export const MatchResultTitle = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
  color: #fff;

  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
  }
`;

export const MatchScore = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;
  align-self: center;

  color: #9f9fa8;

  @media screen and (max-width: 570px) {
    font-size: 0.75rem;
  }
`;

export const BattingImforContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  @media screen and (max-width: 570px) {
    flex-direction: column;
    align-items: self-start;
  }
`;

export const BattingResultHeaderContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 570px) {
    gap: 1rem;
  }
`;

export const BattingResultHeaderTitle = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375rem;

  color: #a7fbd7;
  margin: 0;

  @media screen and (max-width: 570px) {
    font-size: 0.75rem;
  }
`;

export const MatchPredictionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const MatchPredictionTitle = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;

  color: #fff;
  margin: 0;

  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
  }
`;

export const MatchPredictionScore = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;

  color: #fff;
  margin: 0;

  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
  }
`;

export const BattingResultBodyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 570px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const BattingResultContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const BattingResultContents = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

export const BattingResultTitle = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #b7b7be;

  margin: 0;
`;

export const BattingResult = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin: 0;
  color: ${(props) => props.color};
`;

export const BattingResultPoint = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;

  color: ${(props) => props.color};
`;

export const VoteStateContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 570px) {
    justify-content: flex-end;
  }
`;

export const VoteStateTitle = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375rem;

  color: #fff;
  margin: 0;

  @media screen and (max-width: 570px) {
    font-size: 0.75rem;
  }
`;

export const VoteStateContents = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0;

  color: #fff;

  @media screen and (max-width: 570px) {
    font-size: 0.75rem;
  }
`;

export const VoteStatePoint = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin: 0;

  color: #fff;

  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const MatchStateV1 = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  border: 0.0625rem;
  border: 1px solid #fff;

  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #fff;

  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
    padding: 4px 12px;
  }
`;

export const MatchStateV2 = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  background-color: #44444b;

  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #b7b7be;

  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
    padding: 4px 12px;
  }
`;
