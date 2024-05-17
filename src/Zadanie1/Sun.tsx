import { Result } from './Result'

type Props = {
	a: number
	b: number
}

export const Sum = ({ a, b }: Props) => {
	const result = a + b
	return <Result sum={result} />
}
