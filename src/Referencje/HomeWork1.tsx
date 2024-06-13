import { useEffect, useRef, useState } from 'react'

export const HomeWork1 = () => {
	const [conter, setConter] = useState(0)
	const intervalHandle = useRef<number | null>(null)

	const handleStart = () => {
		if (intervalHandle.current !== null) return

		const interval = setInterval(() => {
			setConter((prev) => prev + 1)
		}, 1000)
		intervalHandle.current = interval
	}

	const handleStop = () => {
		if (intervalHandle.current === null) return

		clearInterval(intervalHandle.current)
		intervalHandle.current = null
	}

	const handleReset = () => {
		setConter(0)
		handleStop()
		handleStart()
	}
	useEffect(() => {
		return () => {
			if (intervalHandle.current !== null) clearInterval(intervalHandle.current)
		}
	}, [])

	return (
		<div>
			<h1>Licznik {conter}</h1>

			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop} disabled={intervalHandle.current === null}>
				Stop
			</button>
			<button onClick={handleReset} disabled={intervalHandle.current === null}>
				Reset
			</button>
		</div>
	)
}
