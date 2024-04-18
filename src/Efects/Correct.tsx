import { useState } from "react";

export const Correct = () => {
  const [people, setPeople] = useState<string[]>(["Tomek", "Franek"]);

  const addPreson = () => {
    setPeople((prevPeople) => [
      `Lorem Ipsum ${Math.round(Math.random() * 1000)}`,
      ...prevPeople,
    ]);
  };
  return (
    <>
      <button onClick={addPreson}>AddPerson</button>
      <p>Pierwsza osoba to: {people[0]}</p>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </>
  );
};
