import { NomalBracket } from '../../../style/Bracket/style';
import { BracketFrameV2 } from '../../../assets';
import * as S from './style';

const VolleyballBracket = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <S.ComponentsWrapper>
            <S.ImgCotainer>
              <S.TeamCotainer>
                <NomalBracket Win={false}>주연경팀</NomalBracket>
                <NomalBracket Win={true}>페퍼저축은행팀</NomalBracket>
                <NomalBracket Win={false}>청소년국대팀</NomalBracket>
              </S.TeamCotainer>
              <BracketFrameV2 />
              <S.TeamCotainer>
                <NomalBracket Win={true}>오!영기팀</NomalBracket>
                <NomalBracket Win={false}>배굳팀</NomalBracket>
                <NomalBracket Win={false}>싹싹발리볼팀</NomalBracket>
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
