import { ChangeEvent, memo } from 'react'

type TextInputProps = {
	value: string
	onChange: (value: string) => void
}

export const TextInput = memo(({ value, onChange }: TextInputProps) => {
	console.log('text input', value)
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value)
	}

	return (
		<>
			<input type="text" value={value} onChange={handleChange} />
		</>
	)
})
