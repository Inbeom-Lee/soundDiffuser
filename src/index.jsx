import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import { GlobalTheme, GlobalStyle } from "./theme/index";

const ContextProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children
  );
const contexts = [];

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <ThemeProvider theme={GlobalTheme}>
        <ContextProvider contexts={contexts}>
          <App />
        </ContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </>
);
