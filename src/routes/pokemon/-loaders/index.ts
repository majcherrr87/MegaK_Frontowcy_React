import { defer } from '@tanstack/react-router'
import { Pokemon } from '../../../types'
import { apiCall } from '../../../utils/apiCall'

export const getPokemon = async (pokemonName: string) => {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
	)
	return response.json() as Promise<Pokemon>
}

export const getDeferredPokemon = async (pokemonName: string) => {
	const responsePromise = apiCall<Pokemon>(
		`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
	)
	return {
		deferredRosponse: defer(responsePromise),
	}
}
