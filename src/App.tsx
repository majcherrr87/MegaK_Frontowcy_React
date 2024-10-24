import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useUserData } from './hooks/useUserData'

const queryClient = new QueryClient()

const router = createRouter({
	routeTree,
	context: {
		queryClient,
		isAuthorized: undefined!,
		unauthRedirect: undefined!,
	},
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

export const App = () => {
	const { isAuthorized } = useUserData()
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider
				router={router}
				context={{ isAuthorized, unauthRedirect: '/unauth' }}
			/>
		</QueryClientProvider>
	)
}
