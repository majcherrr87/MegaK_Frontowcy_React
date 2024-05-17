import { useEffect, useState } from 'react'

type Pokemon = {
	name: string
	abilities: {
		ability: {
			name: string
		}
	}[]
}
type Props = {
	name: string
}

export const Exercise1 = ({ name }: Props) => {
	const [pokemon, setPokemon] = useState<Pokemon>()

	const getPokemon = async (pokemonName: string) => {
		const response = await fetch(
			` https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
		)
		const data: Pokemon = await response.json()
		setPokemon(data)
	}

	useEffect(() => {
		getPokemon(name)
	}, [])

	return (
		<div>
			<h1>{pokemon?.name}</h1>
			<h2>Umiejętności</h2>
			<ul>
				{pokemon?.abilities.map(({ ability: { name } }) => (
					<li key={name}>{name}</li>
				))}
			</ul>
		</div>
	)
}
