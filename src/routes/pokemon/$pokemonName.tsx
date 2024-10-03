import { createFileRoute, Link } from '@tanstack/react-router'
import { getPokemon } from './-loaders'

type PokemonSearch = {
	page: number
	pageSize: number
	filters: string[]
}

const SinglePokemon = () => {
	const { name, weight } = Route.useLoaderData()
	const { page, pageSize, filters } = Route.useSearch()
	return (
		<div>
			<h1>{name}</h1>
			<p>weight {weight} kg</p>
			<h2>Route: page</h2>
			<p>Page: {page}</p>
			<p>Page Size: {pageSize}</p>
			<p>Filter:{filters.join(', ')}</p>
			<Link
				to="."
				search={(prev) => ({
					...prev,
					page: (prev.page || 0) + 1,
				})}
			>
				Next pege
			</Link>
		</div>
	)
}

export const Route = createFileRoute('/pokemon/$pokemonName')({
	loaderDeps: ({ search }) => ({ page: search.page }),
	loader: ({ params }) => getPokemon(params.pokemonName),
	validateSearch: (search: Record<string, unknown>): PokemonSearch => ({
		page: Number(search?.page ?? 1),
		pageSize: Number(search?.pageSize ?? 100),
		filters: Array.isArray(search?.filters)
			? search.filters.map((filter) => filter.toString())
			: [],
	}),
	staleTime: 5000,
	component: SinglePokemon,
	pendingComponent: () => <h1>I am loading your pokemon data...</h1>,
})
