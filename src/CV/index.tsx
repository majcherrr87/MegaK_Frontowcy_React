import { Details } from "../Details";
import { Header } from "../Header";
import { Personal } from "../Personal";

import "./CV.scss";

export const CV = () => {
  return (
    <main className="cv-main">
      <Header />
      <Personal />
      <Details />
    </main>
  );
};
