import { useContext } from 'react'
import { CounterContext } from './CounterContex'

export const useCounterContext = () => {
	const context = useContext(CounterContext)

	return context
}
