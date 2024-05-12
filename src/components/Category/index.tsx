import * as S from './style.ts';

import { useLocation } from 'react-router-dom';

const Category = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <S.CategoryContainer>
      <S.CategoryLink to="/" style={currentPath === '/' ? { color: '#fff' } : undefined}>
        경기
      </S.CategoryLink>
      <S.CategoryLink to="/matches/soccer" style={currentPath === '/matches/soccer' ? { color: '#fff' } : undefined}>
        축구
      </S.CategoryLink>
      <S.CategoryLink
        to="/matches/badminton"
        style={currentPath === '/matches/badminton' ? { color: '#fff' } : undefined}
      >
        배드민턴
      </S.CategoryLink>
      <S.CategoryLink
        to="/matches/volleyball"
        style={currentPath === '/matches/volleyball' ? { color: '#fff' } : undefined}
      >
        배구
      </S.CategoryLink>
      <S.CategoryLink
        to="/matches/nomal-match"
        style={currentPath === '/matches/nomal-match' ? { color: '#fff' } : undefined}
      >
        일반 경기
      </S.CategoryLink>
    </S.CategoryContainer>
  );
};

export default Category;
