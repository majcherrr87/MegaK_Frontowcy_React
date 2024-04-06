import { ExerciseHomeButton } from "./ExerciseHomeButton";

export const ExerciseHome = () => {
  const handleClick = (name: string) => {
    console.log(`Clicked ${name}`);
  };

  return (
    <>
      <button onClick={() => handleClick("first")}>First</button>
      <button onClick={() => handleClick("second")}>Second</button>
      <button onClick={() => handleClick("third")}>Third</button>
      <ExerciseHomeButton label="First" onClick={handleClick} />
      <ExerciseHomeButton label="Secend" onClick={handleClick} />
      <ExerciseHomeButton label="Third" onClick={handleClick} />
    </>
  );
};
