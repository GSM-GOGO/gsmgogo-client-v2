import { useLocation } from 'react-router-dom';
import * as S from './style.ts';

const MiniGameCategory = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <S.CategoryContainer>
      <S.CategoryLink
        to="/minigame/coingame"
        style={currentPath === '/minigame/coingame' ? { color: '#fff' } : undefined}
      >
        동전 던지기
      </S.CategoryLink>
    </S.CategoryContainer>
  );
};

export default MiniGameCategory;
