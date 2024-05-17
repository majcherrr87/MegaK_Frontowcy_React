type Props = {
	a: number
	b: number
	c: number
}

export const HighestValue = ({ a, b, c }: Props) => {
	const getHighstValue = (a: number, b: number, c: number) => {
		if (a > b) {
			if (a > c) return a
			return c
		} else {
			if (b > c) return b
			return c
		}
	}

	return (
		<h1>Największa liczba z podanych wartości to {getHighstValue(a, b, c)}</h1>
	)
}
