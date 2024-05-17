import { useEffect, useState } from 'react'

export const FirstConter = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prev) => prev + 1)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return <span>{counter}</span>
}
