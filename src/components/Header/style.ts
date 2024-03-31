import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  width: 40.5rem;
  height: 3.9375rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const GoGoText = styled.h1`
  color: var(--Main, #23f69a);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.9375rem;
  margin: 0;

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 500px) {
    gap: 1.5rem;
  }
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

export const ModalWrapper = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 3rem;
  right: 0.0625rem;
  box-sizing: border-box;
  display: flex;
  background-color: #26262a;
  width: 6rem;
  height: 2rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.75rem;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  text-align: left;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }

  cursor: pointer;
`;

export const SvgContainer = styled.div`
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
