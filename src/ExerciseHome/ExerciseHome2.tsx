import { SyntheticEvent } from "react";

export const ExerciseHome2 = () => {
  const handleClick = (e: SyntheticEvent) => {
    const random = Math.random();
    if (random < 0.5) {
      e.preventDefault();
      console.log(`Click ${random}`);
    } else {
      console.log("redirect");
    }
  };

  return (
    <a onClick={handleClick} href="http://www.google.pl">
      Google
    </a>
  );
};
