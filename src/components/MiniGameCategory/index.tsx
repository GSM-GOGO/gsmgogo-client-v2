import { useLocation } from 'react-router-dom';
import * as S from './style.ts';

interface coinCountType {
  coinCount?: number | undefined;
}

const MiniGameCategory: React.FC<coinCountType> = ({ coinCount = 0 }) => {
  const { pathname } = useLocation();
  const isCoinGame = pathname === '/minigame/coingame';
  const isNunchiGame = pathname === '/minigame/nunchi-game';

  return (
    <S.CategoryContainer>
      <S.CategoryLink to="/minigame/coingame" style={{ color: isCoinGame ? '#fff' : undefined }}>
        동전 던지기
      </S.CategoryLink>
      <S.CategoryLink to="/minigame/nunchi-game" style={{ color: isNunchiGame ? '#fff' : undefined }}>
        눈치 게임
      </S.CategoryLink>
      {isCoinGame && (
        <S.remainCountContainer>
          <S.remainText>남은 횟수</S.remainText>
          <S.countText>{coinCount}번</S.countText>
        </S.remainCountContainer>
      )}
    </S.CategoryContainer>
  );
};


export default MiniGameCategory;
