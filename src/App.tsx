import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Todos } from './Api/tanstackQuery/Todos'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Todos />
			{/* <MultipleTodos /> */}
		</QueryClientProvider>
	)
}
