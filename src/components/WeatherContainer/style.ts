import styled from "styled-components";

export const WeatherWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 1.5rem;
`

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

export const DayText = styled.p`
  color: var(--Gray2, #6F6F7B);
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4rem;
  margin: 0;
`