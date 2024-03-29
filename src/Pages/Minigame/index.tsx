import HeaderContainer from '../../components/HeaderContainer';
import useAccessTokenCheck from '../../hook/useAccessTokenCheck';

const Minigame = () => {
  useAccessTokenCheck();
  return <HeaderContainer />;
};

export default Minigame;
