import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 154px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerResponse = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  overflow-x: auto;
`;

export const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin: auto 0;
`;

export const BeforeButton = styled.button`
  width: 320px;
  height: 52px;
  border-radius: 8px;
  border: 1px solid #23f69a;
  color: #23f69a;
  background-color: transparent;

  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;

  cursor: pointer;
`;

export const ImgCotainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgBox = styled.img`
  width: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TeamCotainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
