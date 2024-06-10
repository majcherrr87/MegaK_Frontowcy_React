import { useEffect, useRef } from 'react'

export const CounterRef = () => {
	const counter = useRef(10)

	useEffect(() => {
		const interval = setInterval(() => {
			counter.current++
			console.log(counter.current)
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [])

	console.log(counter.current)
	return <h1>{counter.current}</h1>
}
