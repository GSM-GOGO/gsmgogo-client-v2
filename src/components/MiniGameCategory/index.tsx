import { useLocation } from 'react-router-dom';
import * as S from './style.ts';

interface coinCountType {
  coinCount: number | undefined;
}

const MiniGameCategory: React.FC<coinCountType> = ({ coinCount }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const remainingCount = coinCount !== undefined ? coinCount : 0;

  return (
    <S.CategoryContainer>
      <S.CategoryLink
        to="/minigame/coingame"
        style={currentPath === '/minigame/coingame' ? { color: '#fff' } : undefined}
      >
        동전 던지기
      </S.CategoryLink>
      <S.remainCountContainer>
        <S.remainText>남은 횟수</S.remainText>
        <S.countText>{remainingCount}번</S.countText>
      </S.remainCountContainer>
    </S.CategoryContainer>
  );
};

export default MiniGameCategory;
