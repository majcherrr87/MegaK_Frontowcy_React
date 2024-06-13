import { useEffect, useRef, useState } from 'react'

export const ExerciseRef2 = () => {
	const counter1 = useRef(0)
	const [counter2, setCounter2] = useState(0)

	useEffect(() => {
		const interval1 = setInterval(() => {
			counter1.current++
		}, 1000)

		const interval2 = setInterval(() => {
			setCounter2((prev) => prev + 1)
		}, 5000)

		return () => {
			clearInterval(interval1)
			clearInterval(interval2)
		}
	}, [])
	useEffect(() => {
		console.log('referencja')
	}, [])

	return (
		<h1>
			{counter1.current} | {counter2}
		</h1>
	)
}
