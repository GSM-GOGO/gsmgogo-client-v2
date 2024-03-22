import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryContainer = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  display: flex;
  gap: 1.75rem;
`;

export const CategoryLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #6f6f7b;
  text-decoration: none;
`;
