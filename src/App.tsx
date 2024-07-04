import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MultipleTodos } from './Api/tanstackQuery/MultipleTodos'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			{/* <Todos /> */}
			<MultipleTodos />
		</QueryClientProvider>
	)
}
