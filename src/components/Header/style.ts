import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 37.5rem;
  padding: 1rem 41.25rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1800px) {
    padding: 1rem 3rem;
    font-size: 1.5rem;
  }
`

export const GoGoText = styled.h1`
  color: var(--Main, #23F69A);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.9375rem;
  margin: 0;
`

export const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
`

export const GoGoMiniText = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0;
`