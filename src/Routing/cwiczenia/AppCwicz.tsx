import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Home } from './Components/Home'
import { Pokemon } from './Components/Pokemon'
import { pokemonLoader } from './loaders/pokemon'
import { NoPokemon } from './Components/NoPokemon'
import { PokemonErrorElement } from './Components/PokemonErrorElement'

const routes = createBrowserRouter([
	{
		path: 'home',
		element: <Home />,
		loader: async () => {
			console.log('STARTING PARENT LOADER')
			return new Promise((resolve) =>
				setTimeout(() => {
					resolve(null)
				}, 2000),
			)
		},
		children: [
			{
				path: 'pokemon/:name?',
				element: <Pokemon />,
				errorElement: <PokemonErrorElement />,
				loader: pokemonLoader,
			},
			{
				path: 'pokemon/',
				element: <NoPokemon />,
			},
		],
	},
	{
		path: '*',
		element: <Navigate to="home" />,
	},
])

export const AppCwicz = () => {
	return <RouterProvider router={routes} />
}
