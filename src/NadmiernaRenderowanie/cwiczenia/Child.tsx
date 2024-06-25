import { memo, useMemo } from 'react'
import { GrandChild } from './GrandChild'

type ChildProps = {
	second: number
}

export const Child = memo(({ second }: ChildProps) => {
	console.log(`Child`)

	const generateArray = (howMany: number) => {
		const array: number[] = []

		for (let i = 0; i < howMany; i++) {
			array.push(Math.round(Math.random() * 1000))
		}
		return array
	}

	const elements = useMemo(() => generateArray(second), [second])
	return (
		<>
			<h2>Child</h2>
			<GrandChild elements={elements} />
		</>
	)
})
