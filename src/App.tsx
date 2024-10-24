// import { Footer } from './components/Footer'
// import { Header } from './components/Header'
// import { ConfigContext } from './context/ConfigContext'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AllSeriestsx } from './components/AllSeries'

// export const App = () => {
// 	return (
// 		<main>
// 			<ConfigContext.Provider
// 				value={{
// 					colors: {
// 						primary: 'red',
// 						secondary: '#fff',
// 					},
// 				}}
// 			>
// 				<Header />
// 				<Footer />
// 			</ConfigContext.Provider>
// 		</main>
// 	)
// }

// Exercise 2
const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<AllSeriestsx />
		</QueryClientProvider>
	)
}
