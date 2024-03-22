import styled from "styled-components";

interface DateContainerProps {
  selected?: boolean;
}
export const WeatherWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  width: 37.5rem;
`

export const DateContainer = styled.div<DateContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  color: ${props => props.selected ? 'var(--White, #FFF)' : 'var(--Gray2, #6F6F7B)'};

`

export const DayText = styled.p`
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4rem;
  margin: 0;
`