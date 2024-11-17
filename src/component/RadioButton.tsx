import { ChangeEvent } from 'react'

export type RadioButtonProps = {
	label: string
	value: string
	name: string
	onChange: (e: ChangeEvent) => void
}

export const RadioButton = ({
	label,
	name,
	value,
	onChange,
}: RadioButtonProps) => {
	return (
		<div>
			<label>
				<input type="radio" value={value} name={name} onChange={onChange} />
				{label}
			</label>
		</div>
	)
}
