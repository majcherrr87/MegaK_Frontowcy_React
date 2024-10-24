import { QueryClient } from '@tanstack/react-query'
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

const RootComponent = () => {
	return (
		<div>
			<h1>my App</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/tasks">Tasks</Link>
				</li>
				<li>
					<Link to="/tasks/new">New</Link>
				</li>
			</ul>

			<Outlet />
			<Suspense>
				<TanStackRouterDevtools />
			</Suspense>
		</div>
	)
}
type RootContext = {
	queryClient: QueryClient
	isAuthorized: boolean
	unauthRedirect: string
}

export const Route = createRootRouteWithContext()<RootContext>({
	component: RootComponent,
})
