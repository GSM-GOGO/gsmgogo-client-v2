import * as S from './style';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react'; // 추가

const NunchiGame = () => {
  const [clickedButton, setClickedButton] = useState(0); // 추가

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
          <S.ButtonContainer>
            {[1, 2, 3, 4, 5].map((number, index) => (
              <img
                src={
                  clickedButton === number
                    ? `/src/assets/png/Button_click.png`
                    : `/src/assets/png/Button${index + 1}.png`
                }
                alt={`Button${index + 1}`}
                style={{
                  gridRow: buttonPositions[number - 1].gridRow,
                  gridColumn: buttonPositions[number - 1].gridColumn,
                }}
                onClick={() => handleButtonClick(number)}
                key={index}
              />
            ))}
          </S.ButtonContainer>
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
