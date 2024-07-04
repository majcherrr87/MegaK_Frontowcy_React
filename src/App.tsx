import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Todos } from './Api/exercise1/Todos'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Todos />
		</QueryClientProvider>
	)
}
