import { useEffect, useState } from "react";

export const ValeuVerifier = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Obecna wartość licznika to {counter}</h1>
      <ol>
        <li>Czy liczba jest parzysta {counter % 2 === 0 ? "Tak" : "Nie"}</li>
      </ol>
    </div>
  );
};
