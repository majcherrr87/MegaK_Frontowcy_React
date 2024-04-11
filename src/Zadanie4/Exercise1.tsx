import { useState } from "react";

export const Exercise1 = () => {
  const [text, setText] = useState("");
  const initialText = "Hello World! ;)";

  const addLetter = () => {
    if (text.length >= initialText.length) return;
    setText((text) => `${text}${initialText[text.length]}`);
  };

  return (
    <>
      <button onClick={addLetter}>+1</button>
      <h1>{text}</h1>
    </>
  );
};
