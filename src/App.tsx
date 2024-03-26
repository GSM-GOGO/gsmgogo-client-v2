import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Minigame, Ranking, Signin, Signup } from './Pages';
import { GlobalStyles } from './style/Globalstyles.ts';
import SoccerForm from './Pages/Formation/SoccerForm/index.tsx';
import BasketForm from './Pages/Formation/BasketForm/index.tsx';
import VolleyForm from './Pages/Formation/VolleyForm/index.tsx';
import NomalMatch from './Pages/Category/Nomal/index.tsx';
import NomalForm from './Pages/Formation/NomalForm/index.tsx';
import Sports from './Pages/Category/Sports/index.tsx';
import Register from './Pages/Register/index.tsx';
import AuthCallBack from './Pages/AuthCallBack/index.tsx';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/minigame" element={<Minigame />} />
          <Route path="/matches/soccer/form" element={<SoccerForm />} />

          <Route path="/matches/basketball/form" element={<BasketForm />} />

          <Route path="/matches/volleyball/form" element={<VolleyForm />} />
          <Route path="/matches/:sport" element={<Sports />} />

          <Route path="/matches/NomalMatch" element={<NomalMatch />} />
          <Route path="/matches/NomalMatch/form" element={<NomalForm />} />

          <Route path="/register" element={<Register />} />

          <Route path="/auth/callback" element={<AuthCallBack />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
