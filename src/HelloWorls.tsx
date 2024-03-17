import { LoremImpum } from "./LoremIpsum";

export const HelloWorld = () => {
  const isOk = false;

  if (!isOk) return null;

  return (
    <>
      <h1>Hello World</h1>
      <LoremImpum />
    </>
  );
};
