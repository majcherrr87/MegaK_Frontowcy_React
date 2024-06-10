import { MutableRefObject } from 'react'

type Props = {
	value: string
	passedRef: MutableRefObject<HTMLInputElement | null>
}

export const Input = ({ value, passedRef }: Props) => {
	return <input type="text" value={value} ref={passedRef} />
}
