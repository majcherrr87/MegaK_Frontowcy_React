import { memo } from 'react'

export type BarProps = {
	value: string
}

export const Bar = memo(({ value }: BarProps) => {
	let val = 1
	for (let i = 0; i < 10000; i++) {
		val += i * val
	}

	return (
		<>
			<h1>{value}</h1>
		</>
	)
})
