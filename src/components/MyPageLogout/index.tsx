import apiClient from '@/utils/libs/apiClient';
import { LogoutIcon } from '@/assets';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const MyPageLogout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      await apiClient.delete(`/auth/logout`, {
        headers: {
          Authorization: accessToken!,
        },
        withCredentials: true,
      });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/signin');
    } catch (e) {}
  };

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
  );
};

export default MyPageLogout;
