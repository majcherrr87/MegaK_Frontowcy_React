import { useLoaderData } from 'react-router-dom'
import { SinglePokemon } from '../types/pokemon'

export const Pokemon = () => {
	const { id, name, weight, height } = useLoaderData() as SinglePokemon

	return (
		<div>
			<p>ID: {id}</p>
			<p>Name: {name}</p>
			<p>Weight: {weight}</p>
			<p>Height: {height}</p>
		</div>
	)
}
