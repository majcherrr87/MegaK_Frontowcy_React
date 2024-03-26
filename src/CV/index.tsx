import { Details } from "../Details";
import { Header } from "../Header";
import { Personal } from "../Personal";
import { CVData } from "./types";

import "./CV.scss";

export const CV = () => {
  const cvData: CVData = {
    personal: {
      photo: "https://placehold.co/400x400?text=AM",
      name: "Adrian",
      lastName: "Majcher",
      position: "Developer",
    },
    details: {
      experience: [
        { year: 2023, description: "Lorem ipsum" },
        { year: 2024, description: "dolor sit amet" },
      ],
      education: ["lorem ipsum", "dolor sit amet", "ale ma kota"],
    },
  };

  return (
    <main className="cv-main">
      <Header data={cvData.personal} />
      <Personal data={cvData.personal} />
      <Details data={cvData.details} />
    </main>
  );
};
