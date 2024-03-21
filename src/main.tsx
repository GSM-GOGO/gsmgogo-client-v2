import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GauthProvider } from '@msg-team/gauth-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GauthProvider
    redirectUri="http://localhost:8080/auth/callback"
    clientId="client id"
    onSuccess={async (code) => {
      console.log(code);
    }}
  >
    <App />
  </GauthProvider>
);
