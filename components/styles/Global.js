import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    align-items: center;
    background-color: ${props => props.theme.offWhite}
    color: ${props => props.theme.offBlack};
    display: flex;
    flex: 1;
    flex-direction: column;
    font-family: ${props => props.theme.bodyFont};
    font-size: 1.6rem;
    justify-content: flex-start;
    line-height: 1.5;
    overflow: auto;
    margin: 0;
    padding: 0 0 8rem;
  }
  a {
    color: inherit;
    margin: 0;
    padding: 0;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #__next {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: hidden;
    padding-bottom: 3rem;
    width: 100%;
  }
`;

export default Global;
