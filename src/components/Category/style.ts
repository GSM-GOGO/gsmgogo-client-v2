import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryContainer = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  display: flex;
  /* width: 40.5rem; */
  gap: 1.75rem;
  @media (max-width: 650px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 500px) {
    gap: 1.2rem;
  }
  /* @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
  } */
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    justify-content: center;
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
