import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
    min-width: 100%;
    justify-content: center;
    overflow: hidden;
  }

  body {
    background: #00a1b6;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #555;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  #root{
    display: flex;
    position: relative;
    flex-direction: column;
  }

  button{
    cursor: pointer;
  }
`;
