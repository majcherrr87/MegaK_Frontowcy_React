import { useState } from "react";
import { Light } from "./Light";
import { Dark } from "./Dark";

export const Switcher = () => {
  const [switcher, setSwitcher] = useState(true);

  return (
    <>
      <button onClick={() => setSwitcher((prev) => !prev)}>
        {switcher ? "Turn On" : "Turn Off"}
      </button>
      {!switcher ? <Light /> : <Dark />}
    </>
  );
};
