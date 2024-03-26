import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import { GrandParent } from "./Zadanie1/GrandParent";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GrandParent value={234} />
  </React.StrictMode>
);
