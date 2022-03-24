import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DetailContextProvider } from "./context/detailcontext";

ReactDOM.render(
  <React.StrictMode>
    <DetailContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DetailContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
