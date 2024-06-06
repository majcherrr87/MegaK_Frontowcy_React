import { FieldErrors } from './FieldErrors'
import { FormChangeEvent } from './types'

type FieldProps = {
	name: string
	errors: string[]
	value: string
	label: string
	type: 'text' | 'password'
	onChange: (e: FormChangeEvent) => void
}

export const Field = ({
	name,
	value,
	errors,
	label,
	type,
	onChange,
}: FieldProps) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>

			<input
				type={type}
				id={name}
				name={name}
				onChange={onChange}
				value={value}
			/>

			<FieldErrors errors={errors} />
		</div>
	)
}
