import { useEffect, useState } from 'react'

let conter2 = 0

export const IncorrectCounter = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		conter2 = 0
		const interval = setInterval(() => {
			setCounter((prev) => prev + 1)
		}, 1000)
		const interval2 = setInterval(() => {
			conter2++
		}, 2000)
		return () => {
			clearInterval(interval)
			clearInterval(interval2)
		}
	}, [])

	return (
		<div>
			{counter} | {conter2}
		</div>
	)
}
