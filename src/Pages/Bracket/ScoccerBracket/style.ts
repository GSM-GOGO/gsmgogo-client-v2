import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 154px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 40.5rem;
  height: 100%;
`;

export const CategoryText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: pretendard;
  color: #fff;
  text-decoration: none;
  line-height: 1.9375rem;
  margin: 0;
  margin-top: 1.25rem;

  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
  }
`;
export const ContainerResponse = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ComponentsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin: auto 0;
`;
