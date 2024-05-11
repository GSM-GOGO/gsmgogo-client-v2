import { createGlobalStyle } from 'styled-components';
import '@/fonts/woff/PretendardWoff.css';
import '@/fonts/woff2/PretendardWoff2.css';

export const GlobalStyles = createGlobalStyle`
	body{
	      overflow-x: hidden;
        background: var(--Black, #1C1C1F);
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        -ms-overflow-style: none;
        ::-webkit-scrollbar{
          display: none;
        }
    };

`;
