import { Child } from './Child'

type Props = {
	value: number
}

export const Parent = ({ value }: Props) => <Child value={value} />
