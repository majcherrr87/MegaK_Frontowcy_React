import "./Details.scss";

interface Experiens {
  year: number;
  description: string;
}
interface CVData {
  experience: Experiens[];
  education: string[];
}
const cvData: CVData = {
  experience: [
    { year: 2023, description: "Lorem ipsum" },
    { year: 2024, description: "dolor sit amet" },
  ],
  education: ["lorem ipsum", "dolor sit amet", "ale ma kota"],
};

export const Details = () => {
  return (
    <section className="cv-details">
      <h2>Experience</h2>
      <ul>
        {cvData.experience.map((experience) => (
          <li key={experience.year}>
            <strong>{experience.year}</strong> - {experience.description}
          </li>
        ))}
      </ul>
      <h2>Experience</h2>
      <ul>
        {cvData.education.map((education, index) => (
          <li key={index}>{education}</li>
        ))}
      </ul>
    </section>
  );
};
