import { CVPersonal } from "../CV/types";

import "./Header.scss";

type Props = {
  data: CVPersonal;
};

export const Header = ({ data: { name, lastName } }: Props) => {
  return (
    <header className="cv-header">
      <h1>
        CV{name} {lastName}
      </h1>
    </header>
  );
};
