import React from "react";
import ReactDOM from "react-dom/client";
import { AgeVerifier } from "./WarunkoweRenderowanie/AgeVerifier";
import "./style.scss";
import { HelloSomebody } from "./WarunkoweRenderowanie/HelloSomebody";
import { SimpleAgeVerifier } from "./WarunkoweRenderowanie/SimpleAgeVerifier";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AgeVerifier age={23} />
    <HelloSomebody />
    <SimpleAgeVerifier age={19} />
  </React.StrictMode>
);
