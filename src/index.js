import React from "react";
import ReactDOM from "react-dom";
import CSSVariables from "./Styles/CSSVariables";
import Normalize from "./Styles/Normalize";
import ReducedMotion from "./Styles/ReducedMotion";
import CurrentUserProvider from "./Contexts/CurrentUserContext";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <CSSVariables />
    <Normalize />
    <ReducedMotion />
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
