import { useEffect, useState } from 'react'

export const useCounter = (initialValue: number, daley: number) => {
	const [counter, setCounter] = useState(initialValue)

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prev) => prev + 1)
		}, daley)

		return () => clearInterval(interval)
	}, [daley])
	return counter
}
