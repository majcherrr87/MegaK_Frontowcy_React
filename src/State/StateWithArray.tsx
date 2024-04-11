import { useState } from "react";

export const StateWithArray = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNewElement = () => {
    const randomValue = Math.round(Math.random() * 10000);
    setNumbers((tab) => [...tab, randomValue]);
  };

  return (
    <>
      <button onClick={addNewElement}>Add element</button>
      <ul>
        {numbers.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </>
  );
};
