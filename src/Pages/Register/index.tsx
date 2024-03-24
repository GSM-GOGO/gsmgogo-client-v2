import { useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/index.tsx';
import * as S from './style.ts';

const Register = () => {
  const [selectedSport, setSelectedSport] = useState('');

  const handleSportSelection = (sport : string) => {
    setSelectedSport(sport);
  };
  return(
    <>
      <HeaderContainer/>
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category style={{color: "var(--White, #FFF)"}}>
                팀 추가
              </S.Category>
            </S.CategoryContainer>

            <S.ContainerResponse>
              <S.SubjectContainer>
                <S.SubjectText>
                  종목
                </S.SubjectText>
                <S.SubjectBox>

                  <S.SubjectOne onClick={() => handleSportSelection('축구')}
                  style={selectedSport === '축구' ? { border: '1px solid var(--Main, #23F69A)',  background: 'rgba(35, 246, 154, 0.10)'} : undefined}>
                    <S.SubjectOneText style={selectedSport === '축구' ? { color: 'var(--Main, #23F69A)' } : undefined}>
                      축구
                    </S.SubjectOneText>
                  </S.SubjectOne>

                  <S.SubjectOne onClick={() => handleSportSelection('농구')}
                  style={selectedSport === '농구' ? { border: '1px solid var(--Main, #23F69A)',  background: 'rgba(35, 246, 154, 0.10)' } : undefined}>
                    <S.SubjectOneText style={selectedSport === '농구' ? { color: 'var(--Main, #23F69A)' } : undefined}>
                      농구
                    </S.SubjectOneText>
                  </S.SubjectOne>

                  <S.SubjectOne onClick={() => handleSportSelection('야구')}
                  style={selectedSport === '야구' ? { border: '1px solid var(--Main, #23F69A)',  background: 'rgba(35, 246, 154, 0.10)' } : undefined}>
                    <S.SubjectOneText style={selectedSport === '야구' ? { color: 'var(--Main, #23F69A)' } : undefined}>
                      야구
                    </S.SubjectOneText>
                  </S.SubjectOne>

                  <S.SubjectOne onClick={() => handleSportSelection('일반경기')}
                  style={selectedSport === '일반경기' ? { border: '1px solid var(--Main, #23F69A)',  background: 'rgba(35, 246, 154, 0.10)' } : undefined}>
                    <S.SubjectOneText style={selectedSport === '일반경기' ? { color: 'var(--Main, #23F69A)' } : undefined}>
                      일반경기
                    </S.SubjectOneText>
                  </S.SubjectOne>

                </S.SubjectBox>
              </S.SubjectContainer>
            </S.ContainerResponse>
          </S.ContainerResponse>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Register