import React from "react";
import ReactDOM from "react-dom/client";
import { IncorrectCounter } from "./Foo/IncorrectCounter";
import { Foo2 } from "./Foo/Foo2";
import "./style.scss";
import { IncorectCounterParrent } from "./Foo/IncorectCounterParrent";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Foo2 /> */}
    {/* <IncorrectCounter /> */}
    <IncorectCounterParrent />
  </React.StrictMode>
);
