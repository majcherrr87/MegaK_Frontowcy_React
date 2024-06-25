import { useEffect, useMemo, useState } from 'react'

type RandomArraySorterProos = {
	direction: 'DESC' | 'ASC'
}

export const RandomArraySorter = ({ direction }: RandomArraySorterProos) => {
	const [randomLength, setRandomLength] = useState(0)

	const generateArray = (howMany: number, sort: string): number[] => {
		const array: number[] = []

		for (let i = 0; i < howMany; i++) {
			array.push(Math.round(Math.random() * 1000))
		}
		sort === 'ASC' ? array.sort() : array.sort().reverse()

		return array
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setRandomLength(Math.round(Math.random() * 15 + 5))
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const elements: number[] = generateArray(randomLength, direction)

	return (
		<div>
			RandomArraySorter {randomLength}
			<p>{direction}</p>
			<p>{elements.join(', ')}</p>
		</div>
	)
}
