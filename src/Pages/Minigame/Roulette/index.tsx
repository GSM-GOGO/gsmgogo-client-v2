import { useState } from 'react'
import { Roulette_point, Rouletteimg } from '../../../assets'
import * as S from './style'
import { ToastContainer, toast } from 'react-toastify'
import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import useStorePoint from './../../../utils/libs/storePoint'
import { spinRoulette } from '../../../apis/Minigame/spinRoulette'
import { fetchUserPoints } from '../../../apis/Point/fetchUserPoints'

const Roulette = () => {
  const [isSpin, setIsSpin] = useState(false)
  const [isShow, setIsShow] = useState(false)
  const [RolletResponse, setRolletResponse] = useState(0)
  const setUserPoint = useStorePoint((state) => state.setUserPoint)
  const [debounce, setDebounce] = useState(false)

  const getTodayDate = () => {
    const today = new Date()
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  }

  const saveTodayDateToLocalStorage = () => {
    const todayDate = getTodayDate()
    localStorage.setItem('lastRouletteDate', todayDate)
  }

  const canSpinRoulette = () => {
    const lastRouletteDate = localStorage.getItem('lastRouletteDate')
    if (lastRouletteDate === null) {
      return true
    }
    const todayDate = getTodayDate()
    return lastRouletteDate !== todayDate
  }

  const Spin = async () => {
    setIsShow(false)
    setIsSpin(true)
    if (debounce) return
    try {
      setDebounce(true)
      const token = localStorage.getItem('accessToken')
      const response = await spinRoulette(token)
      setRolletResponse(response.result)
      setTimeout(async () => {
        setIsShow(true)
        saveTodayDateToLocalStorage()
        try {
          const points = await fetchUserPoints(token)
          setUserPoint(points)
        } catch (e) {}
      }, 300)
    } catch (e) {
      setIsSpin(false)
      saveTodayDateToLocalStorage()
      const errorMessage = (e as Error).message || 'An unknown error occurred.'
      toast.error(errorMessage, { autoClose: 1000 })
    } finally {
      setTimeout(() => {
        setDebounce(false)
      }, 300)
    }
  }

  const RouletteMentArr = [
    { SubMent: '축하합니다!', Ment: '20000포인트 당첨!' },
    { SubMent: '축하합니다!', Ment: '10000포인트 당첨!' },
    { SubMent: '축하합니다!', Ment: '5000포인트 당첨!' },
    { SubMent: '축하합니다!', Ment: '3000포인트 당첨!' },
    { SubMent: '축하합니다!', Ment: '2000포인트 당첨!' },
    { SubMent: '축하합니다!', Ment: '1000포인트 당첨!' },
  ]

  return (
    <>
      <S.Wrapper>
        <S.Container>
          {isShow ? (
            <div style={{ position: 'relative' }}>
              <S.Rouletteimg src={Roulette_point} alt='Roulette_point' />
              <S.MentContainer>
                <S.SubMent>
                  {RouletteMentArr[RolletResponse - 1].SubMent}
                </S.SubMent>
                <S.Ment>{RouletteMentArr[RolletResponse - 1].Ment}</S.Ment>
              </S.MentContainer>
            </div>
          ) : (
            <S.Rouletteimg
              src={Rouletteimg}
              alt='Rouletteimg'
              isspin={isSpin ? 1 : undefined}
            />
          )}
          {canSpinRoulette() ? (
            <S.Button onClick={Spin} disabled={!canSpinRoulette()}>
              <S.Text>데일리 룰렛 돌리기</S.Text>
            </S.Button>
          ) : !isSpin ? (
            <div style={{ width: 'fitContent' }}>
              <S.Button
                close={true ? 1 : undefined}
                ishidden={isSpin ? 1 : undefined}
              >
                <S.Text close={true ? 1 : undefined}>내일 만나요!</S.Text>
              </S.Button>
            </div>
          ) : (
            <Link to='/' style={{ textDecoration: 'none' }}>
              <S.Button>
                <S.Text>홈으로 가기</S.Text>
              </S.Button>
            </Link>
          )}
        </S.Container>
      </S.Wrapper>
      <ToastContainer autoClose={1000} />
      <div>
        <Toaster position='top-right' reverseOrder={true} />
      </div>
    </>
  )
}

export default Roulette
