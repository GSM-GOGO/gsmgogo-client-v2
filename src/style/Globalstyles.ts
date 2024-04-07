import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/woff/PretendardWoff.css';
import '../assets/fonts/woff2/PretendardWoff2.css';

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
