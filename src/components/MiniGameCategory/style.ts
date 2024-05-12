import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryContainer = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  /* width: 40.5rem; */
  gap: 0.75rem;
  @media screen and (max-width: 650px) {
    margin-left: 1rem;
  }
  @media screen and (max-width: 500px) {
    gap: 0.5rem;
  }
`;

export const CategoryLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: pretendard;
  color: #6f6f7b;
  text-decoration: none;
  line-height: 1.9375rem;

  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

export const remainCountContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const remainText = styled.p`
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0;
`;

export const countText = styled.p`
  color: var(--Main, #23f69a);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0;
`;
