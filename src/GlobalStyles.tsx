import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    * {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
    }

    body {
      background-color: #fff;
      color: black;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      margin: 0;
      min-height: 100vh;
      padding: 0;
      width: 100%;
    }

    main {
      margin: auto;
      max-width: 470px;
      min-width: 320px;
      place-items: center;
    }

    a {
      border: 0;
      text-decoration: none;
    }

    h1 {
      font-size: 2em;
      line-height: 1.1;
      margin: 1.25em;
    }

    form {
      margin: 0;
      padding: 2em;
    }

    .text-center {
      text-align: center;
    }

    #root {
      margin: 0 auto;
      padding: 0;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
    }
  }
`;
