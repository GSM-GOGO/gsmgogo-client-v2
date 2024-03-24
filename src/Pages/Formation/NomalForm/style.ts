import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 40.5rem;
`;

export const ContainerResponse = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const TeamTextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  gap: 0.5rem;
`;

export const TeamName = styled.p`
  margin: 0;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: pretendard;
`;

export const TeamClass = styled.p`
  margin: 0;
  color: #6f6f7b;
  font-size: 1rem;
  font-weight: 400;
  font-family: pretendard;
  align-self: flex-end;
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

export const ListContainer = styled.div`
  display: flex;
`;

export const List = styled.div`
  padding: 1.5rem 1rem;
  width: 100%;
  /* height: 4.25rem; */
  border-radius: 0.75rem;
  font-size: 0.875rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  background: #26262a;
  justify-content: space-between;
`;

export const SportsText = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  font-family: pretendard;
  color: #fff;
`;

export const CheckButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.0625rem;
  height: 2.25rem;
  background: transparent;
  border: 0.0625rem solid #b7b7be;
  color: #b7b7be;
  cursor: pointer;
  font-size: 0.875rem;
  border-radius: 0.75rem;
  padding: 1.0125rem 0;
  font-weight: 400;
`;

export const CheerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.0625rem;
  height: 2.25rem;
  background: #23f69a;
  border: none;
  color: #1c1c1f;
  cursor: pointer;
  font-size: 0.875rem;
  border-radius: 0.75rem;
  padding: 1.0125rem 0;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
