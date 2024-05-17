import { CVDetails } from '../CV/types'
import './Details.scss'

type Props = {
	data: CVDetails
}

export const Details = ({ data: { education, experience } }: Props) => {
	return (
		<section className="cv-details">
			<h2>Experience</h2>
			<ul>
				{experience.map((experience) => (
					<li key={experience.year}>
						<strong>{experience.year}</strong> - {experience.description}
					</li>
				))}
			</ul>
			<h2>Experience</h2>
			<ul>
				{education.map((education, index) => (
					<li key={index}>{education}</li>
				))}
			</ul>
		</section>
	)
}
