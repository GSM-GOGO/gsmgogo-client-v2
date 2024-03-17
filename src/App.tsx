import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Signin } from './Pages';
import { GlobalStyles } from './style/Globalstyles.ts';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
