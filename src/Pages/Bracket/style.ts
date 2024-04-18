import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SportNameWrapper = styled.div`
  width: 37.5rem;
`;

export const SportNameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const SportNameBox = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: flex-start;

  padding: 0.25rem 1.5rem;

  @media (max-width: 650px) {
    padding: 0.25rem 3rem;
  }
  @media (max-width: 600px) {
    padding: 0.25rem 5rem;
  }
  @media (max-width: 550px) {
    padding: 0.25rem 7.5rem;
  }
  @media (max-width: 500px) {
    padding: 0.25rem 9rem;
  }
  @media (max-width: 450px) {
    padding: 0.25rem 11rem;
  }
`;

export const SportText = styled.span`
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.9375rem;
`;

export const BracketWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
`;

export const BracketTeamBox = styled.div`
  display: flex;
  width: 9.375rem;
  padding: 0.75rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: 1px solid var(--Gray2, #6f6f7b);
`;

export const BracketText = styled.span`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
`;
