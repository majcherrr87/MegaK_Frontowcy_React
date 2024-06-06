import { ChangeEvent, useState } from 'react'

export const useInput = (initial: string) => {
	const [value, setValue] = useState(initial)

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target
		setValue(value)
	}
	return { value, onChange }
}
