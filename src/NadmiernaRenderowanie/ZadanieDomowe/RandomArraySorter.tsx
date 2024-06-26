import { useEffect, useMemo, useState } from 'react'

type RandomArraySorterProos = {
	direction: 'DESC' | 'ASC'
}

export const RandomArraySorter = ({ direction }: RandomArraySorterProos) => {
	const [randomLength, setRandomLength] = useState(10)

	const getArray = (dir: 'DESC' | 'ASC', len: number): number[] => {
		const array: number[] = []

		for (let i = 0; i < len; i++) {
			array.push(Math.round(Math.random() * 100))
		}
		array.sort((a, b) => (dir === 'ASC' ? a - b : b - a))

		return array
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setRandomLength(Math.round(Math.random() * 15) + 5)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const elements: number[] = useMemo(
		() => getArray(direction, randomLength),
		[direction],
	)

	return (
		<div>
			RandomArraySorter {randomLength}
			<p>{direction}</p>
			<ul>
				{elements.map((el, index) => (
					<li key={index}>{el}</li>
				))}
			</ul>
		</div>
	)
}
