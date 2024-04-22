import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
  width: 40.5rem;
  /* @media (max-width: 650px) {
    width: 35rem;
  }
  @media (max-width: 550px) {
    width: 30rem;
  }
  @media (max-width: 500px) {
    width: 27.5rem;
  }
  @media (max-width: 450px) {
    width: 25rem;
  } */
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const SvgContainer = styled.div`
  margin-top: 9.25rem;
  display: flex;
  justify-content: center;

  @media (max-width: 650px) {
    margin-top: 7.5rem;
    width: 30rem;
  }
  @media (max-width: 500px) {
    width: 27.5rem;
  }
  @media (max-width: 450px) {
    margin-top: 0rem;
    width: 20rem;
  }
`;
