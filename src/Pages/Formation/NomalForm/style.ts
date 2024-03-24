import { Link } from 'react-router-dom';
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
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
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
  margin-bottom: 12px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  padding: 1.5rem 1rem;
  width: 100%;
  border-radius: 0.75rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #26262a;
`;

export const ListTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CandiateContainer = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  width: 32.75rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CandiateButton = styled.div`
  width: Hug (74px) px;
  height: Hug (38px) px;
  padding: 8px 16px 8px 16px;
  gap: 0px;
  border-radius: 12px;
  opacity: 0px;

  border: 1px solid #44444b;

  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;

  color: #b7b7be;
`;

export const SportsText = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  font-family: pretendard;
  color: #fff;
`;

export const ReturnButton = styled.button`
  width: 320px;
  height: 52px;
  padding: 12px 32px;
  background: #1c1c1f;

  border-radius: 8px;
  border: 1px solid #23f69a;

  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  color: #23f69a;

  cursor: pointer;
`;
