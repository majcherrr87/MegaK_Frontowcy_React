import { json, Params } from 'react-router-dom'
import { PokemonError } from '../types/pokemon'

export const pokemonLoader = async ({ params }: { params: Params<'name'> }) => {
	const { name } = params
	console.log('STARTING CHILD LOADER')

	const respons = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

	if (respons.status === 404) {
		throw json(
			{
				message: `Pokemon ${name} does not exist!`,
			} as PokemonError,
			{ status: 404 },
		)
	}
	return respons.json()
}
