import { useEffect } from "react";

let conter2 = 0;

export const SecondConter = () => {
  useEffect(() => {
    conter2 = 0;
    const interval2 = setInterval(() => {
      conter2++;
    }, 2000);
    return () => {
      clearInterval(interval2);
    };
  }, []);

  return <span>{conter2}</span>;
};
