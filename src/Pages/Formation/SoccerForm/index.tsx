import { useEffect, useRef, useState } from 'react';
import { People } from '../../../assets/index.ts';
import HeaderContainer from '../../../components/HeaderContainer/index.tsx';
import * as S from '../style.ts';
import { playersList } from '../soccerList.tsx';
import * as D from './style.ts';
import Draggable from "react-draggable";
import FiledImg from "../../../assets/png/Field.png"
import { useNavigate } from 'react-router-dom';

const SoccerForm = () => {
  const [bounds, setBounds] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
  const formationFieldRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (formationFieldRef.current) {
      const { left, top, right, bottom } = formationFieldRef.current.getBoundingClientRect();
      console.log(left)
      console.log(top)
      console.log(right)
      console.log(bottom)
      setBounds({ left: 0, top: 0, right: right - left - 35, bottom: bottom - top - 60});
    }
}, []);

  const GoBackButton = () => {
    navigate(`/matches/soccer`)
  }

  return (
    <>
      <HeaderContainer/>
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category style={{color: "var(--White, #FFF)", paddingRight: '1.5rem'}}>
                어쩌구저쩌구FC 축구 포메이션
                <D.MiniText>
                  3학년 SW
                </D.MiniText>
              </S.Category>
              <S.Category style={{color: "var(--Main, #23F69A)"}}>
                3승
              </S.Category>
            </S.CategoryContainer>

            <S.ContainerResponse style={{paddingBottom: "3.5rem"}}>
                <D.ImgBox ref={formationFieldRef} img = {FiledImg} style={{position: "relative"}}>
                    {playersList.map((player) => (
                      <div key={player.id} style={{position: "absolute"}}>
                        <div style={{position: "relative"}}>
                            <Draggable
                                defaultPosition={{ x: player.x, y: player.y }}
                                bounds={bounds}
                            >
                              <D.PlayerContainer style={{cursor: "pointer"}}>
                                  <People/>
                                  <D.PlayerText style={{ userSelect: 'none' }}>
                                    {player.name}
                                  </D.PlayerText>
                              </D.PlayerContainer>
                            </Draggable>
                        </div>
                      </div>
                    ))}
                </D.ImgBox>
            </S.ContainerResponse>

            <S.ContainerResponse>
              <S.BackButton onClick={GoBackButton}>
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