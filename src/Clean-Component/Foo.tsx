import { FC } from "react";

type Props = {
  readonly text: string;
};
export const Foo: FC<Props> = ({ text }) => {
  text = "Kot lisa";
  return <h1>{text}</h1>;
};
