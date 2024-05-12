import * as S from './style';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { Button, Button_click } from '../../../assets/index';
import MiniGameCategory from '../../../components/MiniGameCategory';

const NunchiGame = () => {
  const [clickedButton, setClickedButton] = useState(0);

  const handleButtonClick = (button: number) => setClickedButton(clickedButton === button ? 0 : button);

  const buttonPositions = [
    { gridRow: 1, gridColumn: 1 },
    { gridRow: 1, gridColumn: 3 },
    { gridRow: 2, gridColumn: 2 },
    { gridRow: 3, gridColumn: 1 },
    { gridRow: 3, gridColumn: 3 },
  ];

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <MiniGameCategory />
          <S.ContainerResponse>
            <S.ButtonContainer>
              {[1, 2, 3, 4, 5].map((number, index) => (
                <div
                  style={{
                    gridRow: buttonPositions[number - 1].gridRow,
                    gridColumn: buttonPositions[number - 1].gridColumn,
                    position: 'relative',
                  }}
                >
                  <S.ButtonIMG
                    src={clickedButton === number ? Button_click : Button}
                    alt={`Button${index + 1}`}
                    onClick={() => handleButtonClick(number)}
                    key={index}
                  />
                  <S.ButtonText>{`${index + 1}번`}</S.ButtonText>
                </div>
              ))}
            </S.ButtonContainer>
            <S.BottomContainer>
              <S.InfoContainer>
                {[1, 2, 3, 4, 5].map((number, index) => (
                  <div style={{ display: 'contents' }} key={index}>
                    <div>
                      <S.Text1>{number}번</S.Text1>
                      <S.Text2>??%</S.Text2>
                    </div>
                    {number !== 5 && <S.Contour />}
                  </div>
                ))}
              </S.InfoContainer>
              <S.Button color={clickedButton}>
                {clickedButton !== 0 && `${clickedButton}번 `}
                버튼 누르기
              </S.Button>
              <S.Text>
                매일 밤 11시, 가장 적게 눌린 버튼을 누른 분들에게 포인트를 지급해요 <br />
                <span>50만 원 이상 보유자는 참여할 수 없어요</span>
              </S.Text>
            </S.BottomContainer>
          </S.ContainerResponse>
        </S.Container>
      </S.Wrapper>
      <ToastContainer autoClose={1000} />
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </>
  );
};

export default NunchiGame;
