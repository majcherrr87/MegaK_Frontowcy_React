import { Link } from 'react-router-dom'

export const NoPokemon = () => {
	return (
		<div>
			Please select a pokemon or use this link:
			<Link to="pikachu">Pikachu</Link>
		</div>
	)
}
