import React from "react";
import ReactDOM from "react-dom/client";
import { Cart } from "./Cart/Cart";

import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>
);
