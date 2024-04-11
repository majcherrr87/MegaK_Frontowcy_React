import { useState } from "react";

export const RandomNumberGenerator = () => {
  const [numTab, setNumTab] = useState<number[]>([]);

  const numbersGenerator = () => {
    const randomNumber = Math.round(Math.random() * 100);
    setNumTab((prevTabNum) => [...prevTabNum, randomNumber]);
  };
  return (
    <>
      <button onClick={numbersGenerator}>Losuj</button>
      <ul>
        {numTab.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </>
  );
};
