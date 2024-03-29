import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAccessTokenCheck = () => {
  const navigate = useNavigate();

  const checkAccessToken = () => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/signin');
    }
  };

  useEffect(() => {
    checkAccessToken();
  }, [navigate]);

  return checkAccessToken;
};

export default useAccessTokenCheck;
