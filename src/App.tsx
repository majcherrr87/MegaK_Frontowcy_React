import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Books } from './Api/tanstackQuery/homeWork/Books'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Books />
		</QueryClientProvider>
	)
}
