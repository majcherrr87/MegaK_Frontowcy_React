import { useEffect, useState } from 'react'

export const App = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		console.log('useEffect')
		const interval = setInterval(() => {
			setCounter((prev) => prev + 1)
		}, 1000)
		return () => {
			console.log('clear')
			clearInterval(interval)
		}
	}, [])
	return <h1>{counter}</h1>
}
