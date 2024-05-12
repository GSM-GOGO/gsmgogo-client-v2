import * as S from './style';
import { PlayingContainer, Category } from '@/components';

const Main = () => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <div>
            <Category />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <PlayingContainer />
            </div>
          </div>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Main;
