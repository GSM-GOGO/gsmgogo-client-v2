import { NomalBracket } from '../../../style/Bracket/style';
import { BracketFrameV2 } from '../../../assets';
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
                <NomalBracket>^____^FC</NomalBracket>
                <NomalBracket Win={false}>오영기FC</NomalBracket>
              </S.TeamCotainer>
              <BracketFrameV2 />
              <S.TeamCotainer>
                <NomalBracket Win={false}>싹싹FC</NomalBracket>
                <NomalBracket Win={false}>경주FC</NomalBracket>
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
