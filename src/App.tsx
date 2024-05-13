import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Ranking, Signin, Signup } from './Pages';
import { GlobalStyles } from './style/Globalstyles.ts';
import SoccerForm from './Pages/Formation/SoccerForm/index.tsx';
import VolleyForm from './Pages/Formation/VolleyForm/index.tsx';
import BadmintonForm from './Pages/Formation/BadmintonForm/index.tsx';
import NomalMatch from './Pages/Category/Nomal/index.tsx';
import NomalForm from './Pages/Formation/NomalForm/index.tsx';
import Sports from './Pages/Category/Sports/index.tsx';
import AuthCallBack from './Pages/AuthCallBack/index.tsx';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './components/Header/index.tsx';
import styled from 'styled-components';
import Notfound from './components/Loading/Notfound.tsx';
import { PrivateRoute } from './utils/libs/PrivateRoute.tsx';
import Coingame from './Pages/Minigame/CoinGame/index.tsx';
import Roulette from './Pages/Minigame/Roulette/index.tsx';
import SoccerBracket from './Pages/Bracket/ScoccerBracket/index.tsx';
import BadmintonBracket from './Pages/Bracket/BadmintonBracket/index.tsx';
import VolleyballBracket from './Pages/Bracket/VolleyballBracket/index.tsx';
import NunchiGame from './Pages/Minigame/NunchiGame/index.tsx';
import MyPage from './Pages/MyPage/index.tsx';
import { useEffect, useState } from 'react';
// import { Analytics } from '@vercel/analytics/react';

const queryClient = new QueryClient();

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const [headerText, setHeaderText] = useState<string>('GSM GOGO');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setHeaderText('G');
      } else {
        setHeaderText(headerText);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              path="/"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Main />
                </>
              }
            />
            <Route
              path="/ranking"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Ranking />
                </>
              }
            />
            <Route
              path="/minigame/coingame"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Coingame />
                </>
              }
            />
            
            <Route
              path="/minigame/nunchi-game"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <NunchiGame />
                </>
              }
            />
            <Route
              path="/minigame/daily-roulette"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Roulette />
                </>
              }
            />
            <Route
              path="/matches/soccer/form/:id"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <SoccerForm />
                </>
              }
            />
            <Route
              path="/matches/badminton/form/:id"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <BadmintonForm />
                </>
              }
            />
            <Route
              path="/matches/volleyball/form/:id"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <VolleyForm />
                </>
              }
            />

            <Route
              path="/matches/:sport"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Sports />
                </>
              }
            />
            <Route
              path="/matches/nomal-match"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <NomalMatch />
                </>
              }
            />
            <Route
              path="/matches/nomal-match/form/:id"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <NomalForm />
                </>
              }
            />

            {/* <Route
              path="/bracket/:sport"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Bracket />
                </>
              }
            /> */}

            <Route
              path="/bracket/soccer"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <SoccerBracket />
                </>
              }
            />

            <Route
              path="/bracket/badminton"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <BadmintonBracket />
                </>
              }
            />

            <Route
              path="/bracket/volleyball"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <VolleyballBracket />
                </>
              }
            />
            <Route
              path="/mypage"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <MyPage />
                </>
              }
            />

            {/* <Route
              path="/register"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Register />
                </>
              }
            />
            <Route
              path="/register/badminton"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Badminton />
                </>
              }
            />
            <Route
              path="/register/soccer"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Soccer />
                </>
              }
            />
            <Route
              path="/register/volleyball"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={headerText} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Volleyball />
                </>
              }
            /> */}
          </Route>

          <Route path="/auth/callback" element={<AuthCallBack />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
          {/* <Analytics /> */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
