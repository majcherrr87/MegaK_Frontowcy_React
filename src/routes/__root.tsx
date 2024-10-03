import {
	Link,
	Outlet,
	createRootRouteWithContext,
} from '@tanstack/react-router'
import React, { Suspense } from 'react'

const TanStackRouterDevtools = import.meta.env.DEV
	? React.lazy(() =>
			import('@tanstack/router-devtools').then((res) => ({
				default: res.TanStackRouterDevtools,
			})),
		)
	: () => null

const Root = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/ip">IP</Link>
					</li>
					<li>
						<Link to="/lorem">Lorem</Link>
					</li>
					<li>
						<Link to="/data">Data</Link>
					</li>
					<li>
						<Link to="/dolor">Dolor</Link>
					</li>
					<li>
						<Link to="/value/$value" params={{ value: '1234567890' }}>
							Dolor
						</Link>
					</li>
					<li>
						<Link to="/color/$r/$g/$b" params={{ r: '12', b: '23', g: '67' }}>
							1
						</Link>
					</li>
					<li>
						<Link to="/color/$r/$g/$b" params={{ r: '55', b: '23', g: '67' }}>
							2
						</Link>
					</li>
					<li>
						<Link to="/color/$r/$g/$b" params={{ r: '12', b: '156', g: '67' }}>
							3
						</Link>
					</li>
					<li>
						<Link to="/color/$r/$g/$b" params={{ r: '12', b: '23', g: '123' }}>
							4
						</Link>
					</li>
					<li>
						<Link
							to="/pokemon/$pokemonName"
							params={{ pokemonName: 'pikachu' }}
							search={{
								page: 2,
								pageSize: 200,
								filters: ['new', 'latest', 'kot'],
							}}
						>
							Pikachu
						</Link>
					</li>
					<li>
						<Link
							to="/pokemon/$pokemonName"
							params={{ pokemonName: 'charizard' }}
							search={{
								page: 1,
								pageSize: 100,
								filters: ['new', 'latest'],
							}}
						>
							Charizard
						</Link>
					</li>
					<li>
						<Link
							to="/pokemon/defer/$pokemonName"
							params={{ pokemonName: 'charizard' }}
						>
							Defer Charizard
						</Link>
					</li>
					<li>
						<Link to="/people" search={{ page: 1, size: 3 }}>
							People 3
						</Link>
					</li>
					<li>
						<Link to="/people" search={{ page: 1, size: 5 }}>
							People 5
						</Link>
					</li>
					<li>
						<Link to="/people" search={{ page: 1, size: 8 }}>
							People 8
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
			<Suspense>
				<TanStackRouterDevtools />
			</Suspense>
		</div>
	)
}

export const Route = createRootRouteWithContext()<{ value: number }>({
	component: Root,
})
