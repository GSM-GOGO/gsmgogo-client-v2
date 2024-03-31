import styled from 'styled-components';

export const SvgContainer = styled.div`
  margin-top: 17.5rem;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 650px) {
    margin-top: 12.5em;
    width: 30rem;
  }
  @media (max-width: 500px) {
    width: 27.5rem;
  }
  @media (max-width: 450px) {
    margin-top: 7rem;
    width: 20rem;
  }
`;
