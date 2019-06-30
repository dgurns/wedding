import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${
    '' /* @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  } */
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    ${'' /* font-family: 'radnika_next'; */}
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
