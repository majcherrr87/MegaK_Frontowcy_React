import { useDeferredValue } from 'react'
import { Bar } from './Bar'
import { useInput } from './hooks/useInput'

export const App = () => {
	const value = useInput('')
	const deferredValue = useDeferredValue(value.value)

	console.log(value.value, deferredValue)

	return (
		<div>
			<input type="text" {...value} />
			<Bar value={deferredValue} />
		</div>
	)
}
