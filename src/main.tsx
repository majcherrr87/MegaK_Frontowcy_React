import React from "react";
import ReactDOM from "react-dom/client";

import { HighestValue } from "./WarunkoweRenderowanie/HomeWork/HighestValue";
import { Switcher } from "./WarunkoweRenderowanie/HomeWork/Switcher";
import { ValeuVerifier } from "./WarunkoweRenderowanie/HomeWork/ValeuVerifier";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HighestValue a={1} b={2} c={3} />
    <Switcher />
    <ValeuVerifier />
  </React.StrictMode>
);
