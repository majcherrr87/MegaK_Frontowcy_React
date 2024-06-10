import { useEffect, useState } from 'react'
import { useOneTimeRef } from './Hooks/useOneTimeRef'

const getRandomValue = () => {
	const random = Math.round(Math.random() * 10000)
	console.log('Generating', random)
	return random
}

export const OneTimeRef = () => {
	const [counter, setCounter] = useState(0)
	const value = useOneTimeRef(getRandomValue)

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prev) => prev + 1)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div>
			OneTimeRef {value.current} | {counter}
		</div>
	)
}
