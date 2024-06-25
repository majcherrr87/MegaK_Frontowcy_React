import { useEffect, useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
	const [counter, setCounter] = useState(0)
	const [counter5, setCounter5] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prev) => prev + 1)
		}, 1000)
		const interval5 = setInterval(() => {
			setCounter5((prev) => prev + 1)
		}, 5000)

		return () => {
			clearInterval(interval)
			clearInterval(interval5)
		}
	}, [])
	console.log(`Parent`)

	return (
		<>
			<h1>
				{counter}
				{counter5}
			</h1>
			<Child second={counter5} />
		</>
	)
}
