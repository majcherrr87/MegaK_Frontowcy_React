import React from "react";
import ReactDOM from "react-dom/client";

import "./style.scss";

import { Foo } from "./Foo/Foo";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Foo
      elements={[
        { id: 1, value: "Hello World" },
        { id: 2, value: "Kot Lisa" },
        { id: 3, value: "Lorem Ipsum" },
      ]}
    />
  </React.StrictMode>
);
