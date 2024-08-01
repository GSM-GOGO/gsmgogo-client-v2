import { LogoutIcon } from '../../assets'
import * as S from './style'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../apis/Auth/logout'

const MyPageLogout = () => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    logout(navigate)
  }

  return (
    <S.FirstHeaderContainer>
      <S.FirstHeaderTitleContainer>
        <S.FirstHeaderTitleContainerResponse>
          <S.Title>마이페이지</S.Title>
        </S.FirstHeaderTitleContainerResponse>
      </S.FirstHeaderTitleContainer>
      <S.LogoutContainer onClick={handleLogout}>
        <S.LogoutContainerResponse>
          <LogoutIcon />
          <S.LogoutText>로그아웃</S.LogoutText>
        </S.LogoutContainerResponse>
      </S.LogoutContainer>
    </S.FirstHeaderContainer>
  )
}

export default MyPageLogout
