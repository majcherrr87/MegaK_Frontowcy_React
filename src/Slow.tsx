import { useState, useTransition } from 'react'

export type ElementsType = {
	label: string
	id: number
}[]

const randomize = () => {
	const elements: ElementsType = []
	const randomValue = Math.round(Math.random() * 1000)

	for (let i = 0; i < 20000; i++) {
		elements.push({
			label: `elements-${randomValue}-${i}`,
			id: i,
		})
	}
	return elements
}

export const Slow = () => {
	const [elements, setElements] = useState<ElementsType>([])
	const [counter, setCounter] = useState(0)
	const [isPending, startTransition] = useTransition()

	const getData = () => {
		setCounter((prev) => prev + 1)
		startTransition(() => {
			setElements(randomize())
		})
	}
	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={getData}>getData</button>
			{isPending ? (
				<p>Loading...</p>
			) : (
				<ul>
					{elements.map(({ label, id }) => (
						<li key={id}>{label}</li>
					))}
				</ul>
			)}
		</div>
	)
}
