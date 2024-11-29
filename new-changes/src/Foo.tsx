import { Bar } from './Bar'

export type FooProps = {
	value: number
	toggle: boolean
}

const heavyCalculation = (flag: boolean) => {
	if (flag) return 9999999999
	return Math.round(Math.random() * 1000000)
}

export const Foo = ({ value, toggle }: FooProps) => {
	const random = heavyCalculation(toggle)
	return (
		<div>
			<h1>{value}</h1>
			<h2>{random}</h2>
			<Bar />
		</div>
	)
}
