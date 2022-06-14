import React from "react";
import ReactDOM from "react-dom";

import Twittler from "./Twittler";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Twittler />
  </React.StrictMode>,
  rootElement
);
