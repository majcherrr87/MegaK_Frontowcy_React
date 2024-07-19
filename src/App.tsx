import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Books } from './Api/tanstackQuery/homeWork/Books'
import { BookStats } from './Api/tanstackQuery/homeWork/BookStats'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BookStats />
			<Books />
		</QueryClientProvider>
	)
}
