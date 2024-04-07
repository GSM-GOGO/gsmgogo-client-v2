import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Minigame, Ranking, Signin, Signup } from './Pages';
import { GlobalStyles } from './style/Globalstyles.ts';
import SoccerForm from './Pages/Formation/SoccerForm/index.tsx';
import VolleyForm from './Pages/Formation/VolleyForm/index.tsx';
import BadmintonForm from './Pages/Formation/BadmintonForm/index.tsx';
import NomalMatch from './Pages/Category/Nomal/index.tsx';
import NomalForm from './Pages/Formation/NomalForm/index.tsx';
import Sports from './Pages/Category/Sports/index.tsx';
import Register from './Pages/Register/index.tsx';
import AuthCallBack from './Pages/AuthCallBack/index.tsx';
import Badminton from './Pages/Register/Badminton/index.tsx';
import Soccer from './Pages/Register/Soccer/index.tsx';
import Volleyball from './Pages/Register/Volleyball/index.tsx';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './components/Header/index.tsx';
import styled from 'styled-components';
import Notfound from './components/Loading/Notfound.tsx';
import { PrivateRoute } from './apis/PrivateRoute.tsx';

const queryClient = new QueryClient();

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
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
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
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
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Ranking />
                </>
              }
            />
            <Route
              path="/minigame"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Minigame />
                </>
              }
            />
            <Route
              path="/matches/soccer/form/:id"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
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
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
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
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
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
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
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
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
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
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <NomalForm />
                </>
              }
            />

            <Route
              path="/register"
              element={
                <>
                  <HeaderContainer>
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
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
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
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
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
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
                    <Header mainText={'GSM GOGO'} miniText={['랭킹', '미니게임']} />
                  </HeaderContainer>
                  <Volleyball />
                </>
              }
            />
          </Route>

          <Route path="/auth/callback" element={<AuthCallBack />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
