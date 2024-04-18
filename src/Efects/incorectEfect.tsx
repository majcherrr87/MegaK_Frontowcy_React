import { useEffect, useState } from "react";

export const IncorectEfect = () => {
  const [people, setPeople] = useState<string[]>(["Tomek", "Franek"]);
  const [firstPerson, setFirstPerson] = useState(people[0]);

  useEffect(() => {
    setFirstPerson(people[0]);
  }, [people]);
  const addPreson = () => {
    setPeople((prevPeople) => [
      `Lorem Ipsum ${Math.round(Math.random() * 1000)}`,
      ...prevPeople,
    ]);
  };
  return (
    <>
      <button onClick={addPreson}>AddPerson</button>
      <p>Pierwsza osoba to: {firstPerson}</p>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </>
  );
};
