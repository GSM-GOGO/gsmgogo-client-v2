import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './style/Globalstyles.ts';
import { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import styled from 'styled-components';
import {
  Main,
  Ranking,
  Signin,
  Signup,
  SoccerForm,
  VolleyForm,
  BadmintonForm,
  Nomal,
  NomalForm,
  Sports,
  AuthCallBack,
  CoinGame,
  Roulette,
  NunchiGame,
  SoccerBracket,
  BadmintonBracket,
  VolleyballBracket,
  MyPage,
} from '@/Pages';
import { Header, Notfound } from '@/components';
import { PrivateRoute } from './utils/libs/PrivateRoute.tsx';

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
                  <CoinGame />
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
                  <Nomal />
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
          <Route path="/NunchiGame" element={<NunchiGame />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
