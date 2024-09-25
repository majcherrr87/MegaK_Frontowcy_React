import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { PokemonError } from '../types/pokemon'

const isPokemonError = (error: unknown): error is PokemonError => {
	const correct = error as PokemonError

	return !!correct.message && typeof correct.message === 'string'
}

export const PokemonErrorElement = () => {
	const error = useRouteError()

	if (!isRouteErrorResponse(error)) return <h1>Some random error happened.</h1>
	if (!isPokemonError(error.data))
		return <h1>An. {error.status} error happened.</h1>

	return <h1>{error.data.message}</h1>
}
