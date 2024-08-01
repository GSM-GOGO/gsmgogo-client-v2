import { useLocation, useNavigate } from 'react-router-dom'
import { Roulette, MyPageIcon, NotMyPage } from '../../assets'
import * as S from './style'
import { useEffect, useState } from 'react'
import useStorePoint from '../../utils/libs/storePoint'
import { fetchUserPoints } from '../../apis/Point/fetchUserPoints'

interface TextTypeProps {
  mainText: string
  miniText: string[]
}

const Header: React.FC<TextTypeProps> = ({ mainText, miniText }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const userPoint = useStorePoint((state) => state.userPoint)
  const setUserPoint = useStorePoint((state) => state.setUserPoint)
  const [hasFetchedUserPoint, setHasFetchedUserPoint] = useState(false)

  useEffect(() => {
    if (!hasFetchedUserPoint) {
      const getUserPoint = async () => {
        const token = localStorage.getItem('accessToken')
        const data = await fetchUserPoints(token)

        setUserPoint(formatPoint(data.point))
        setHasFetchedUserPoint(true)
      }

      getUserPoint()
    }
  }, [hasFetchedUserPoint, setUserPoint, userPoint])

  const formatPoint = (point: string) => {
    return parseInt(point).toLocaleString()
  }

  return (
    <>
      <S.HeaderWrapper>
        <S.GoGoText onClick={() => navigate(`/`)} style={{ cursor: 'pointer' }}>
          {mainText}
        </S.GoGoText>

        <S.TextBox>
          <S.GoGoMiniLink
            to='/ranking'
            style={
              currentPath === '/ranking' ? { color: '#23F69A' } : undefined
            }
          >
            {miniText[0]}
          </S.GoGoMiniLink>

          <S.GoGoMiniLink
            to='/minigame/coingame'
            style={
              currentPath === '/minigame/coingame'
                ? { color: '#23F69A' }
                : undefined
            }
          >
            {miniText[1]}
          </S.GoGoMiniLink>

          <S.GoGoMiniLink to='/minigame/daily-roulette'>
            <Roulette isClick={currentPath === '/minigame/daily-roulette'} />
          </S.GoGoMiniLink>
          <S.UserBox>
            <S.GoGoMiniText
              style={{
                color: 'var(--Main, #23F69A)',
              }}
            >
              {userPoint}P
            </S.GoGoMiniText>

            <S.SvgContainer
              onClick={() => {
                navigate('/mypage')
              }}
            >
              {currentPath === '/mypage' ? <MyPageIcon /> : <NotMyPage />}
            </S.SvgContainer>
          </S.UserBox>
        </S.TextBox>
      </S.HeaderWrapper>
    </>
  )
}

export default Header
