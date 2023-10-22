import { createGlobalStyle } from "styled-components";
import { GlobalTheme } from "./GlobalTheme";
import "./fontCSS.css";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Happiness";
    font-size: 15px;
    font-weight: 400;
    color: ${GlobalTheme.color.text.white};
  }
  input, select, textarea {
    font-family: "Happiness";
    font-size: 15px;
    color: ${GlobalTheme.color.text.white};

    &:focus {
    outline: none;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
