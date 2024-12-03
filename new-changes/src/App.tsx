import { useState, useTransition } from 'react'

const getValue = (): Promise<number[]> => {
	const elements: number[] = []

	for (let i = 0; i < 10000; i++) {
		elements.push(Math.round(Math.random() * 10000))
	}
	return new Promise<number[]>((result) => result(elements))
}

export const App = () => {
	const [elements, setElements] = useState<number[]>([])
	const [counter, setCounter] = useState<number>(0)
	const [pending, startTransition] = useTransition()

	const generate = () => {
		setCounter((prev) => prev + 1)
		startTransition(async () => {
			const result = await getValue()

			startTransition(() => {
				setElements(result)
			})
		})
	}

	return (
		<>
			<div>
				<button onClick={generate}>Set elements</button>
				<h1>Clicks: {counter}</h1>
				{pending ? (
					<p>Loading...</p>
				) : (
					<ul>
						{elements.map((element, index) => (
							<li key={index}>
								<div>
									<h2>{element}</h2>
									<p>
										This is {index + 1} value and it is {element}
									</p>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	)
}
