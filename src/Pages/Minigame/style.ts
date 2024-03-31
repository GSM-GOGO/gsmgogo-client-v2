import styled from 'styled-components';

export const SvgContainer = styled.div`
  margin-top: 17.5rem;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 650px) {
    margin-top: 12.5em;
    width: auto;
  }
  @media (max-width: 500px) {
    width: auto;
  }
  @media (max-width: 450px) {
    margin-top: 6.5rem;
    width: auto;
  }
`;
