import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: var(--gotham);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: calc(100vw / 1920 * 10);
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    @media (max-width: 1024px)  {
      font-size: calc(55vw / 1024 * 10);
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${theme.colors.blueYankees};
    color: ${theme.colors.black};

    @media (max-width: 900px)  {
      width: 4px;
    }
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.indigoRainbow};
    border-radius: 20px;

    &:hover {
      background-color: ${theme.colors.indigoRainbow};
    }
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    overscroll-behavior: none;
    background-color: ${theme.colors.blueYankees};
  }

  main {
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  li {
    list-style-type: none;
  }

  a {
    cursor: none;
    color: inherit;
    text-decoration: none;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: none;
    outline: inherit;
  }
  
  input, textarea {
    appearance: none;
    border: none;
    border-radius: none;
    outline: none;
  }
`;

export default GlobalStyles;
