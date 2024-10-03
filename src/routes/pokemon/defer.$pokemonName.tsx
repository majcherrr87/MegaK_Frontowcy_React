import { Await, createFileRoute } from '@tanstack/react-router'
import { getDeferredPokemon } from './-loaders'
import { Suspense } from 'react'

const SingleDeferPokemon = () => {
	const { deferredRosponse } = Route.useLoaderData()
	return (
		<div>
			<Suspense fallback="Loading...">
				<Await promise={deferredRosponse}>
					{({ name, weight }) => (
						<div>
							<h2>Name: {name}</h2>
							<p>Weigth: {weight}</p>
						</div>
					)}
				</Await>
			</Suspense>
		</div>
	)
}

export const Route = createFileRoute('/pokemon/defer/$pokemonName')({
	loader: ({ params }) => getDeferredPokemon(params.pokemonName),

	component: SingleDeferPokemon,
})
