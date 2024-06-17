import { memo, useMemo } from 'react'

type ChildProps = {
	value: number[]
	counter: number
}
const heavyCalculation = (numbers: number[]) => {
	console.log(`HeavyCalculation Start`)
	let result = numbers.length ** 2
	for (let i = 0; i < 1000000; i++) {
		result += (result * 2) % 255
	}
	console.log(`HeavyCalculation Stop`)
	return result
}

export const Child = memo(({ value, counter }: ChildProps) => {
	const CalculatiionValue = useMemo(() => heavyCalculation(value), [value])
	console.log(`Render`)
	return (
		<h1>
			Hello Word {value.join()} {counter} {CalculatiionValue}
		</h1>
	)
})
