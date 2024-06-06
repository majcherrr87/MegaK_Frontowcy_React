import { FieldErrors } from './FieldErrors'
import { FormChangeEvent } from './types'

type CheckboxProps = {
	name: string
	errors: string[]
	checked: boolean
	label: string
	onChange: (e: FormChangeEvent) => void
}

export const Checkbox = ({
	name,
	checked,
	errors,
	label,
	onChange,
}: CheckboxProps) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>

			<input
				type="checkbox"
				id={name}
				name={name}
				onChange={onChange}
				checked={checked}
			/>

			<FieldErrors errors={errors} />
		</div>
	)
}
