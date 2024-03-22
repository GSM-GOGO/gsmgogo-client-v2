import styled from "styled-components";

export const PlayingContainer = styled.div`
  display: flex;
  width: 37.5rem;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
`

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const EventContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const EventTexts = styled.h2`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0;
`

export const GradeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
`

export const OneGrade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const TeamName = styled.h3`
  color: #FFF;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0;
`

export const GradeText = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  margin: 0;
`

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`

export const OneTimeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const TimeText = styled.p`
  color: var(--Gray2, #6F6F7B);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`

export const GrayLine = styled.div`
width: 37.5rem;
height: 0.0625rem;
background: var(--colors-gray-gray-800, #44444B);
`


export const PredictContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.75rem;
  background: var(--colors-gray-gray-900, #26262A);
`

export const PercentBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const UnderTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
`

export const WinORLosestyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const PredictPointBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const PredictText = styled.p`
  color: var(--White, #FFF);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  line-height: 1.25rem;
`

export const PredictScoreBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`