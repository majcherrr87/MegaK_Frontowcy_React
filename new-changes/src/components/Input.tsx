import { ForwardedRef } from 'react'

export type InputProps = {
	name: string
	ref: ForwardedRef<HTMLInputElement>
}

export const Input = ({ name, ref }: InputProps) => {
	return <input name={name} ref={ref} />
}
