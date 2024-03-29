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
          <Route path="/matches/badminton/form" element={<BadmintonForm />} />
          <Route path="/matches/volleyball/form" element={<VolleyForm />} />
          <Route path="/matches/:sport" element={<Sports />} />

          <Route path="/matches/NomalMatch" element={<NomalMatch />} />
          <Route path="/matches/NomalMatch/form" element={<NomalForm />} />

          <Route path="/register" element={<Register />} />
          <Route path="/register/badminton" element={<Badminton />} />
          <Route path="/register/soccer" element={<Soccer />} />
          <Route path="/register/volleyball" element={<Volleyball />} />

          <Route path="/auth/callback" element={<AuthCallBack />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
