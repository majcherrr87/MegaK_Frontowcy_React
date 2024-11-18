import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	FormControlLabel,
	RadioGroup as MUIRadioGroup,
	Radio,
} from '@mui/material'

export type RadioGroupProps<T extends FieldValues> = {
	name: Path<T>
	options: {
		value: string
		label: string
	}[]
	control: Control<T>
}

export const RadioGroup = <T extends FieldValues>({
	options,
	name,
	control,
}: RadioGroupProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange } }) => (
				<MUIRadioGroup onChange={onChange}>
					{options.map(({ value, label }) => (
						<FormControlLabel
							key={value}
							value={value}
							label={label}
							control={<Radio />}
						/>
					))}
				</MUIRadioGroup>
			)}
		/>
	)
}
