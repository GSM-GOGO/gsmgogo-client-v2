import * as S from './style';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Button_click } from '../../../assets/index';
import MiniGameCategory from '../../../components/MiniGameCategory';
import apiClient from '../../../utils/libs/apiClient';

import useStorePoint from '../../../utils/libs/storePoint';

const NunchiGame = () => {
  type ClickResponse = {
    button_type: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | null;
  };

  const [clickedButton, setClickedButton] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [clickResponse, setClickResponse] = useState<ClickResponse>();
  const userPoint = useStorePoint((state) => state.userPoint);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [buttonGame, setButtonGame] = useState([]);

  useEffect(() => {
    getUserBtnClicked();
  }, []);

  const getUserBtnClicked = async () => {
    try {
      const token = localStorage.getItem('accessToken');

      const response = await apiClient.get(`/game/button`, {
        headers: {
          Authorization: token,
        },
        withCredentials: true,
      });
      const buttonType = response.data.button_type;
      const clickedBtn =
        buttonType === 'ONE'
          ? 1
          : buttonType === 'TWO'
            ? 2
            : buttonType === 'THREE'
              ? 3
              : buttonType === 'FOUR'
                ? 4
                : buttonType === 'FIVE'
                  ? 5
                  : 0;
      setClickedButton(clickedBtn);
      setClickResponse(response.data);
    } catch (e) {}
  };

  const sendClickBtn = async (clickBtn: number, isClicked: boolean) => {
    if (parseInt(userPoint.split(',').join('')) < 500000) {
      if (isClicked === false) {
        try {
          const token = localStorage.getItem('accessToken');
          const buttonTypes = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];
          const buttonType = buttonTypes[clickBtn - 1];

          await apiClient.post(
            `/game/button`,
            {
              button_type: buttonType,
            },
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );
        } catch (e: any) {
          const errorMessage = e.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
          setTimeout(() => {
            toast.error(errorMessage, { autoClose: 1000 });
          }, 500);
        } finally {
          setTimeout(() => {
            toast.success(`${clickBtn}번 버튼을 클릭하셨습니다.`, { autoClose: 1000 });
          }, 1000);
        }
      }
    } else {
      toast.error('너무 많은 포인트를 보유하고 있습니다.', { autoClose: 1000 });
    }
    setIsClicked(true);
  };

  const handleButtonClick = (button: number) => {
    setClickedButton(clickedButton === button ? 0 : button);
  };

  const buttonPositions = [
    { gridRow: 1, gridColumn: 1 },
    { gridRow: 1, gridColumn: 3 },
    { gridRow: 2, gridColumn: 2 },
    { gridRow: 3, gridColumn: 1 },
    { gridRow: 3, gridColumn: 3 },
  ];

  useEffect(() => {
    if (selectedDate) {
      const month = selectedDate.getMonth() + 1;
      const day = selectedDate.getDate();

      const fetchData = async () => {
        try {
          const token = localStorage.getItem('accessToken');
          const response = await apiClient.get(` /game/button?m=${month}&d=${day}`, {
            headers: {
              Authorization: token,
            },
            withCredentials: true,
          });
          setButtonGame(response.data);
        } catch (error) {}
      };

      fetchData();
    }
  }, [selectedDate]);

  const dates = useMemo(() => {
    const today = new Date();
    const newDates: Date[] = [];
    for (let i = 0; i < 11; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      newDates.push(date);
    }
    return newDates;
  }, []);

  const dayOfWeek = useMemo(() => {
    return dates.map((date) => {
      const days = ['일', '월', '화', '수', '목', '금', '토'];
      const dayIndex = date.getDay();
      return days[dayIndex];
    });
  }, [dates]);

  const handleDateClick = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <MiniGameCategory />
          <S.ContainerResponse>
            <S.WeatherWrapper>
              {dates.map((date, index) => (
                <S.DateContainer
                  key={index}
                  onClick={() => handleDateClick(date)}
                  selected={date.getDate() === selectedDate.getDate()}
                >
                  <S.DayText>{dayOfWeek[index]}</S.DayText>
                  <S.DayText>{date.getDate()}일</S.DayText>
                </S.DateContainer>
              ))}
            </S.WeatherWrapper>
            <S.ButtonWrapper>
              <S.ButtonContainer>
                {[1, 2, 3, 4, 5].map((number, index) => (
                  <div
                    key={index}
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

                {isClicked && clickResponse && clickResponse.button_type === null ? (
                  <>
                    <S.Button color={0}>
                      {parseInt(userPoint.split(',').join('')) > 500000
                        ? '많은 포인트를 보유하고 있어요'
                        : `${clickedButton} 번 버튼을 눌렀어요`}
                    </S.Button>
                    <S.Text>
                      매일 밤 11시, 가장 적게 눌린 버튼을 누른 분들에게 포인트를 지급해요 <br />
                      <span>50만 원 이상 보유자는 참여할 수 없어요</span>
                    </S.Text>
                  </>
                ) : clickResponse && clickResponse.button_type !== null ? (
                  <>
                    <S.Button color={0} onClick={() => toast.error('이미 버튼을 클릭하셨습니다.', { autoClose: 1000 })}>
                      {clickResponse.button_type === 'ONE'
                        ? 1
                        : clickResponse.button_type === 'TWO'
                          ? 2
                          : clickResponse.button_type === 'THREE'
                            ? 3
                            : clickResponse.button_type === 'FOUR'
                              ? 4
                              : clickResponse.button_type === 'FIVE'
                                ? 5
                                : null}
                      번 버튼을 눌렀어요
                    </S.Button>
                    <S.Text>
                      매일 밤 11시, 가장 적게 눌린 버튼을 누른 분들에게 포인트를 지급해요 <br />
                    </S.Text>
                  </>
                ) : (
                  <>
                    <S.Button color={clickedButton} onClick={() => sendClickBtn(clickedButton, isClicked)}>
                      {clickedButton !== 0 && `${clickedButton}번 `}
                      버튼 누르기
                    </S.Button>
                    <S.Text>
                      매일 밤 11시, 가장 적게 눌린 버튼을 누른 분들에게 포인트를 지급해요 <br />
                      <span>50만 원 이상 보유자는 참여할 수 없어요</span>
                    </S.Text>
                  </>
                )}
              </S.BottomContainer>
            </S.ButtonWrapper>
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
