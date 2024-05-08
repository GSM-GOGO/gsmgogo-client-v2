import { NomalBracket } from '../../../style/Bracket/style';
import { BracketFrame } from '../../../assets';
import * as S from './style';

const SoccerBracket = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <S.ComponentsWrapper>
            <S.ImgCotainer>
              <S.TeamCotainer>
                <NomalBracket Win={false}>발라마FC</NomalBracket>
                <NomalBracket Win={true}>^____^FC</NomalBracket>
                <NomalBracket>오영기FC</NomalBracket>
              </S.TeamCotainer>
              <BracketFrame />
              <S.TeamCotainer>
                <NomalBracket>싹싹FC</NomalBracket>
                <NomalBracket>경주FC</NomalBracket>
                <NomalBracket>뭉쳐야찬다FC</NomalBracket>
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

export default SoccerBracket;
