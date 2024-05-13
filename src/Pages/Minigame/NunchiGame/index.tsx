import * as S from './style';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Button_click } from '../../../assets/index';
import MiniGameCategory from '../../../components/MiniGameCategory';
import apiClient from '../../../utils/libs/apiClient';

const NunchiGame = () => {
  type ButtonGameType = {
    button_type: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | null;
    date: String | null;
    is_active: Boolean | null;
    win_type: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | null;
    results: { [key: string]: number | null };
    is_win: Boolean | null;
    earned_point: number;
  };

  const [clickedButton, setClickedButton] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [buttonGame, setButtonGame] = useState<ButtonGameType>({
    button_type: null,
    date: '',
    is_active: false,
    win_type: null,
    results: {},
    is_win: false,
    earned_point: 0,
  });

  const buttonPositions = [
    { gridRow: 1, gridColumn: 1 },
    { gridRow: 1, gridColumn: 3 },
    { gridRow: 2, gridColumn: 2 },
    { gridRow: 3, gridColumn: 1 },
    { gridRow: 3, gridColumn: 3 },
  ];

  const month = selectedDate.getMonth() + 1;
  const day = selectedDate.getDate();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await apiClient.get(`/game/button?m=${month}&d=${day}`, {
        headers: {
          Authorization: token,
        },
        withCredentials: true,
      });
      setButtonGame(response.data);
      setClickedButton(
        response.data.button_type === 'ONE'
          ? 1
          : response.data.button_type === 'TWO'
            ? 2
            : response.data.button_type === 'THREE'
              ? 3
              : response.data.button_type === 'FOUR'
                ? 4
                : response.data.button_type === 'FIVE'
                  ? 5
                  : 0
      );
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
      setTimeout(() => {
        toast.error(errorMessage, { autoClose: 1000 });
      }, 500);
      setClickedButton(0);
      buttonGame.is_active = false;
    }
  };

  useEffect(() => {
    if (selectedDate) {
      fetchData();
    }
  }, [selectedDate]);

  const sendClickBtn = async (clickBtn: number) => {
    try {
      const token = localStorage.getItem('accessToken');
      const buttonTypes = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];
      const buttonType = buttonTypes[clickBtn - 1];

      console.log('buttonType', buttonType);
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
      setTimeout(() => {
        toast.success(`${clickBtn}번 버튼을 클릭하셨습니다.`, { autoClose: 1000 });
        fetchData();
      }, 1000);
    } catch (e: any) {
      const errorMessage = e.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
      setTimeout(() => {
        toast.error(errorMessage, { autoClose: 1000 });
      }, 500);
    }
  };

  const dates = useMemo(() => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const hour = today.getHours();
    let endDay = currentDay;
    if (hour >= 23) {
      endDay++;
    }
    const newDates = [];
    for (let i = 13; i <= endDay; i++) {
      const date = new Date(currentYear, currentMonth, i);
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

  const buttonTypes = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];

  const handleButtonClick = (button: number) => {
    if (
      buttonGame.button_type !== 'ONE' &&
      buttonGame.button_type !== 'TWO' &&
      buttonGame.button_type !== 'THREE' &&
      buttonGame.button_type !== 'FOUR' &&
      buttonGame.button_type !== 'FIVE' &&
      buttonGame.is_active
    ) {
      setClickedButton(clickedButton === button ? 0 : button);
    }
  };
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
            <S.Info color={buttonGame.earned_point > 0}>
              {buttonGame.is_active == true
                ? '걸린 포인트 | 200만'
                : buttonGame.is_win == true
                  ? `+${buttonGame.earned_point.toLocaleString()}P`
                  : '아쉬워요'}
            </S.Info>
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
                        <S.Text1
                          color={
                            number ==
                            (buttonGame.button_type === 'ONE'
                              ? 1
                              : buttonGame.button_type === 'TWO'
                                ? 2
                                : buttonGame.button_type === 'THREE'
                                  ? 3
                                  : buttonGame.button_type === 'FOUR'
                                    ? 4
                                    : buttonGame.button_type === 'FIVE'
                                      ? 5
                                      : 0)
                          }
                        >
                          {number}번
                        </S.Text1>
                        <S.Text2
                          color={
                            number ==
                            (buttonGame.button_type === 'ONE'
                              ? 1
                              : buttonGame.button_type === 'TWO'
                                ? 2
                                : buttonGame.button_type === 'THREE'
                                  ? 3
                                  : buttonGame.button_type === 'FOUR'
                                    ? 4
                                    : buttonGame.button_type === 'FIVE'
                                      ? 5
                                      : 0)
                          }
                        >
                          {buttonGame.results ? buttonGame.results[buttonTypes[number - 1]] ?? '0' : '??'}명
                        </S.Text2>
                      </div>
                      {number !== 5 && <S.Contour />}
                    </div>
                  ))}
                </S.InfoContainer>
                <S.Button
                  color={
                    clickedButton &&
                    buttonGame.button_type !== 'ONE' &&
                    buttonGame.button_type !== 'TWO' &&
                    buttonGame.button_type !== 'THREE' &&
                    buttonGame.button_type !== 'FOUR' &&
                    buttonGame.button_type !== 'FIVE'
                  }
                  onClick={
                    clickedButton &&
                    buttonGame.button_type !== 'ONE' &&
                    buttonGame.button_type !== 'TWO' &&
                    buttonGame.button_type !== 'THREE' &&
                    buttonGame.button_type !== 'FOUR' &&
                    buttonGame.button_type !== 'FIVE'
                      ? () => sendClickBtn(clickedButton)
                      : undefined
                  }
                >
                  {clickedButton > 0 && `${clickedButton}번 `}
                  {buttonGame.button_type == 'ONE' ||
                  buttonGame.button_type == 'TWO' ||
                  buttonGame.button_type == 'THREE' ||
                  buttonGame.button_type == 'FOUR' ||
                  buttonGame.button_type == 'FIVE' ? (
                    <>버튼을 눌렀어요</>
                  ) : (
                    <>버튼 누르기</>
                  )}
                </S.Button>
                <S.Text>
                  매일 밤 11시, 가장 적게 눌린 버튼을 누른 분들에게 포인트를 지급해요 <br />
                  <span>50만 원 이상 보유자는 참여할 수 없어요</span>
                </S.Text>
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
