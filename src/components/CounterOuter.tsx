import { CounterInner } from './CounterInner'

export const CounterOuter = () => {
	console.log('Counter Outer')
	return (
		<div>
			<CounterInner />
		</div>
	)
}
