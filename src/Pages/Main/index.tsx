import PlayingContainer from '../../components/PlayingContainer/index.tsx';
import * as S from './style';
import Category from '../../components/Category/index.tsx';

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
              {/* <S.SvgContainer>
              <EmptyPlaying />
            </S.SvgContainer> */}
              {/* <S.MainContainer> */}
              <PlayingContainer />
              {/* </S.MainContainer> */}
            </div>
          </div>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Main;
