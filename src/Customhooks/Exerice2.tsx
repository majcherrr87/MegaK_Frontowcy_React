import { useEffect, useState } from 'react'
import { useDebounceState } from '../hooks/useDebounceState'

export const Exerice2 = () => {
	const [counter, setCounter] = useState(0)
	const debouncedCounter = useDebounceState(counter, 300)

	const onClick = () => {
		setCounter((prev) => prev + 1)
	}

	useEffect(() => {
		if (counter === 0) return
		console.log('Starting procedure to launch nukes')
	}, [debouncedCounter, counter])

	return (
		<div>
			<h1>{debouncedCounter}</h1>

			<button onClick={onClick}>Click me</button>
		</div>
	)
}
