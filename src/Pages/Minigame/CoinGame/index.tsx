import React, { useState, MouseEvent, ChangeEvent, useEffect } from 'react';
import { CoinIcon, HeadCoin, TailCoin } from '../../../assets/index';
import MiniGameCategory from '../../../components/MiniGameCategory';
import * as S from './style';
import apiClient from '../../../utils/libs/apiClient';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import useStorePoint from '../../../utils/libs/storePoint';

interface Result {
  prediction: 'HEAD' | 'TAIL';
  result: 'HEAD' | 'TAIL';
  win: boolean;
  earned_point: number;
}

const Coingame: React.FC = () => {
  const setUserPoint = useStorePoint((state) => state.setUserPoint);

  const [modal, setModal] = useState(false);
  const [coinButton, setCoinButton] = useState<string>('');
  const [coinInput, setCoinInput] = useState<number>();
  const [result, setResult] = useState<Result>({} as Result);
  const [displayResultText, setDisplayResultText] = useState(false);
  const [initialImage, setInitialImage] = useState(HeadCoin);

  useEffect(() => {
    setInitialImage(HeadCoin);
  }, []);

  const handleButton = (e: MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;

    if (name === 'obverse') {
      setModal(true);
      setCoinButton('HEAD');
    } else if (name === 'back') {
      setModal(true);
      setCoinButton('TAIL');
    }
  };

  const ChangeCoinInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedValue = parseInt(inputValue);

    if (!isNaN(parsedValue)) {
      setCoinInput(parsedValue);
    }
  };

  const handleBating = async () => {
    try {
      setDisplayResultText(false);

      const token = localStorage.getItem('accessToken');
      const response = await apiClient.post(
        '/game/coin',
        {
          prediction: coinButton,
          point: coinInput,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      setResult(response.data);
      if (response.data.result === 'HEAD') setInitialImage(HeadCoin);
      else if (response.data.result === 'TAIL') setInitialImage(TailCoin);
      setDisplayResultText(true);
      setModal(false);

      try {
        const token = localStorage.getItem('accessToken');

        const response = await apiClient.get(`/user/my-point`, {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        });

        setUserPoint(response.data.point);
      } catch (e) {}
    } catch (error) {
      toast.error('하루에 10회, 최대 3000 포인트까지 배팅 할 수 있어요.', { autoClose: 1000 });
    }
  };

  return (
    <>
      {modal ? (
        <S.ModalBackground>
          <S.ModalContainer>
            <S.ModalTextContainer>
              <S.ModalTitle>
                <S.ModalTitleContainer>코인을 던지겠습니까?</S.ModalTitleContainer>
              </S.ModalTitle>
              <S.ModalNovelContainer>
                <S.ModalNovel>배팅 금액을 적어주세요</S.ModalNovel>
              </S.ModalNovelContainer>
            </S.ModalTextContainer>
            <S.CoinInputContainer>
              <S.CoinInput onChange={ChangeCoinInput} maxLength={8} placeholder="마이너스 불가능" />
              <S.CoinIconCotainer>
                <CoinIcon />
              </S.CoinIconCotainer>
            </S.CoinInputContainer>
            <S.ModalButtonContainer>
              <S.ModalCencleButton
                onClick={() => {
                  setModal(false);
                  setCoinButton('');
                  setCoinInput(undefined);
                }}
              >
                아니오
              </S.ModalCencleButton>
              <S.ModalCheerButton onClick={handleBating}>배팅하기</S.ModalCheerButton>
            </S.ModalButtonContainer>
          </S.ModalContainer>
        </S.ModalBackground>
      ) : null}
      <S.Wrapper>
        <S.Container>
          <MiniGameCategory />
          <S.ContainerResponse>
            <S.ComponentsWrapper>
              {displayResultText && <S.ResultText>{result.win ? '성공!' : '맞추지 못했어요'}</S.ResultText>}
              <S.ImgBox src={initialImage} alt="Coin" />
              <S.AtomWrapper>
                <S.AtomContainer>
                  <S.ButtonWrapper>
                    <S.ButtonContainer>
                      <S.CoinButton name="obverse" onClick={handleButton}>
                        앞면 배팅
                      </S.CoinButton>
                      <S.CoinButton name="back" onClick={handleButton}>
                        뒷면 배팅
                      </S.CoinButton>
                    </S.ButtonContainer>
                    <S.Text>
                      동전던지기는 하루에 10회, 최대 3000 포인트까지 배팅 할 수 있어요 동전의 면을 맞출 시 배팅한
                      포인트의 2배를 얻어요
                    </S.Text>
                  </S.ButtonWrapper>
                </S.AtomContainer>
              </S.AtomWrapper>
            </S.ComponentsWrapper>
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

export default Coingame;