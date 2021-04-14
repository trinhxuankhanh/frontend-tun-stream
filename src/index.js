import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import App from "./App";
import { DataProvider } from "./GlobalState";

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById("root")
);
