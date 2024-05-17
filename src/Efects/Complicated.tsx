import { useState } from 'react'

export const Complicated = () => {
	const [counter1, setCounter1] = useState(0)
	const [counter2, setCounter2] = useState(0)

	const increment1 = () => {
		setCounter1((prevCounter) => prevCounter + 1)
	}
	const increment2 = () => {
		setCounter2((prevCounter) => prevCounter + 1)
	}
	const computedValue = counter1 ** 3
	console.log('klick')

	return (
		<>
			<h1>{computedValue}</h1>
			<button onClick={increment1}>{counter1}</button>
			<button onClick={increment2}>{counter2}</button>
		</>
	)
}
