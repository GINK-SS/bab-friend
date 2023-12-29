import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/font.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    font-family: "Pretendard-Regular";
    color: inherit;
    box-sizing: border-box;
  }

  :after,
  :before {
    box-sizing: border-box;
  }

  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
  }

  html,
  body {
    height: 100%;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  button {    
    background: none;
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default GlobalStyle;
