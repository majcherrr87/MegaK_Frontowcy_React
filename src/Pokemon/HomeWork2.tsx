import { useEffect, useState } from "react";

export const HomeWork2 = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = counter + "";
  }, [counter]);

  return <h1>{counter}</h1>;
};
