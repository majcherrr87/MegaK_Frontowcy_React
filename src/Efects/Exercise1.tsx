import { useEffect, useState } from 'react'

export const Efects1 = () => {
	const [counter, setCounter] = useState(0)
	const [intervalTime, setIntervalTime] = useState(1000)

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1)
		}, intervalTime)

		return () => {
			clearInterval(interval)
		}
	}, [intervalTime])

	const increaseTime = () => {
		setIntervalTime((prevTime) => prevTime + 1000)
	}
	return (
		<>
			<button onClick={increaseTime}>{intervalTime}</button>
			<h1>Licznik: {counter}</h1>
		</>
	)
}
