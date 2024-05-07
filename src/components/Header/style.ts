import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  width: 40.5rem;
  height: 3.9375rem;
  margin: 0 1rem;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 650px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const GoGoText = styled.h1`
  color: var(--Main, #23f69a);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.9375rem;
  margin: 0;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 500px) {
    gap: 1.5rem;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const GoGoMiniText = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0;

  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const GoGoMiniLink = styled(Link)`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0;
  color: #b7b7be;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const SvgContainer = styled.div`
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }

  display: flex;
  text-align: center;
`;
