import HeaderContainer from '../../../components/HeaderContainer/index.tsx';
import * as S from './style.ts';

const Soccer = () => {
  return (
    <>
      <HeaderContainer />
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category>경기</S.Category>
              <S.Category>축구</S.Category>
              <S.Category>농구</S.Category>
              <S.Category>배구</S.Category>
            </S.CategoryContainer>
            <S.ListWrapper>
              <S.ListContainer>
                <S.List />
              </S.ListContainer>
              <S.ListContainer>
                <S.List />
              </S.ListContainer>
            </S.ListWrapper>
            <S.Button>로그인</S.Button>
          </S.ContainerResponse>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Soccer;
