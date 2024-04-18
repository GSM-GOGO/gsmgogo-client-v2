import { useState } from 'react';
import { Roulette_point, Rouletteimg } from '../../../assets';
import * as S from './style';
import apiClient from './../../../utils/libs/apiClient';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Roulette = () => {
  const [isSpin, setIsSpin] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [RolletResponse, setRolletResponse] = useState(0);

  const getTodayDate = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  };

  const saveTodayDateToLocalStorage = () => {
    const todayDate = getTodayDate();
    localStorage.setItem('lastRouletteDate', todayDate);
  };

  const canSpinRoulette = () => {
    const lastRouletteDate = localStorage.getItem('lastRouletteDate');
    if (lastRouletteDate === null) {
      return true;
    }
    const todayDate = getTodayDate();
    return lastRouletteDate !== todayDate;
  };

  const Spin = async () => {
    setIsShow(false);
    setIsSpin(true);
    try {
      const token = localStorage.getItem('accessToken');
      const response = await apiClient.post(`/game/roulette`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setRolletResponse(response.data.result);
      setTimeout(() => {
        setIsShow(true);
        if (response.data.result != 5) {
          saveTodayDateToLocalStorage();
        }
      }, 3000);
    } catch (e: any) {
      setIsSpin(false);
      saveTodayDateToLocalStorage();
      const errorMessage = e.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
      setTimeout(() => {
        toast.error(errorMessage, { autoClose: 1000 });
      }, 500);
    }
  };

  const RouletteMentArr = [
    { SubMent: '축하합니다!', Ment: '2000포인트 당첨!' },
    { SubMent: '축하합니다!', Ment: '1000포인트 당첨!' },
    { SubMent: '축하합니다!', Ment: '500포인트 당첨!' },
    { SubMent: '축하합니다!', Ment: '100포인트 당첨!' },
    { SubMent: '500P는 보너스!', Ment: '한 번 더!' },
    { SubMent: '아쉽네요', Ment: '꽝, 내일 만나요!' },
  ];

  return (
    <>
      <S.Wrapper>
        <S.Container>
          {isShow ? (
            <div style={{ position: 'relative' }}>
              <S.Rouletteimg src={Roulette_point} alt="Roulette_point" />
              <S.MentContainer>
                <S.SubMent>{RouletteMentArr[RolletResponse - 1].SubMent}</S.SubMent>
                <S.Ment>{RouletteMentArr[RolletResponse - 1].Ment}</S.Ment>
              </S.MentContainer>
            </div>
          ) : (
            <S.Rouletteimg src={Rouletteimg} alt="Rouletteimg" isSpin={isSpin} />
          )}
          {canSpinRoulette() ? (
            <S.Button onClick={Spin} disabled={!canSpinRoulette()}>
              <S.Text>데일리 룰렛 돌리기</S.Text>
            </S.Button>
          ) : !isSpin ? (
            <div>
              <S.Button close={true} isHidden={isSpin}>
                <S.Text close={true}>내일 만나요!</S.Text>
              </S.Button>
            </div>
          ) : (
            <Link to="/" style={{ textDecoration: 'none' }}>
              <S.Button>
                <S.Text>홈으로 가기</S.Text>
              </S.Button>
            </Link>
          )}
        </S.Container>
      </S.Wrapper>
      <ToastContainer autoClose={1000} />
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </>
  );
};

export default Roulette;