import { NomalBracket } from '../../../style/Bracket/style';
import { BracketFrame } from '../../../assets';
import * as S from './style';

const VolleyballBracket = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <S.ComponentsWrapper>
            <S.ImgCotainer>
              <S.TeamCotainer>
                <NomalBracket>주연경팀</NomalBracket>
                <NomalBracket>페퍼저축은행팀</NomalBracket>
                <NomalBracket>청소년국대팀</NomalBracket>
              </S.TeamCotainer>
              <BracketFrame />
              <S.TeamCotainer>
                <NomalBracket>오!영기팀</NomalBracket>
                <NomalBracket>배굳팀</NomalBracket>
                <NomalBracket>싹싹발리볼팀</NomalBracket>
              </S.TeamCotainer>
            </S.ImgCotainer>
          </S.ComponentsWrapper>
          <S.BeforeButton
            onClick={() => {
              window.location.href = '/';
            }}
          >
            돌아가기
          </S.BeforeButton>
        </S.ContainerResponse>
      </S.Container>
    </S.Wrapper>
  );
};

export default VolleyballBracket;
