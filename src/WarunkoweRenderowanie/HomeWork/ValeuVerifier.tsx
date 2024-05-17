import { useEffect, useState } from 'react'

export const ValeuVerifier = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	const getHighestDivider = (value: number) => {
		for (let i = Math.floor(value / 2); i > 1; i--) {
			if (value % 2) return i
		}
		return 1
	}

	const divrderBy235 = (value: number) => {
		return value % 2 === 0 || value % 3 === 0 || value % 5 === 0
	}

	return (
		<div>
			<h1>Obecna wartość licznika to {counter}</h1>
			<ol>
				<li>Czy liczba jest parzysta {counter % 2 === 0 ? 'Tak' : 'Nie'}</li>
				{counter > 0 && (
					<li>
						Największy dzielnik liczby {counter} to {getHighestDivider(counter)}
					</li>
				)}
				{divrderBy235(counter) && <li>Liczba dzieli się przez 2, 3 lub 5</li>}
			</ol>
		</div>
	)
}
