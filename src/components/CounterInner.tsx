import { useCounterContext } from '../context/useCounterContext'

export const CounterInner = () => {
	const { counter, resetCounter } = useCounterContext()
	console.log('Counter inner', counter)
	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={resetCounter}>Reset</button>
		</div>
	)
}
