import { useDeferredValue } from 'react'
import { useInput } from './hooks/useInput'
import { Slow } from './Slow'

export const App = () => {
	const value = useInput('')
	const deferredValue = useDeferredValue(value.value)

	console.log(value.value, deferredValue)

	return (
		<div>
			<Slow />
		</div>
	)
}
