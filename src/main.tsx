import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CookiesProvider } from 'react-cookie';
//
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);
