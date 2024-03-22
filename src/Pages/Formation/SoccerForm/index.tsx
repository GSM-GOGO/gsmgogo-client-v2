import { SoccerField } from '../../../assets/index.ts';
import HeaderContainer from '../../../components/HeaderContainer/index.tsx';
import * as S from '../style.ts';
import * as D from './style.ts';

const SoccerForm = () => {
  return (
    <>
      <HeaderContainer/>
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category>
                어쩌구저쩌구팀 축구 포메이션
              </S.Category>
            </S.CategoryContainer>

            <S.ContainerResponse style={{paddingBottom: "3.5rem"}}>
              <SoccerField/>

              <D.PlayerContainer>
                <D.PlayerText>
                  
                </D.PlayerText>
              </D.PlayerContainer>
            </S.ContainerResponse>

            <S.ContainerResponse>
              <S.BackButton>
                <S.BackText>
                  돌아가기
                </S.BackText>
              </S.BackButton>
            </S.ContainerResponse>
          </S.ContainerResponse>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default SoccerForm;