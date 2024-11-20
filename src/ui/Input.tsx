import { TextField } from '@mui/material'
import { forwardRef } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export type InputProps = {
	label: string
	type: 'text' | 'number'
	error?: FieldError
}

export const Input = forwardRef<
	HTMLInputElement,
	InputProps & UseFormRegisterReturn
>(({ type, label, error, ...register }, ref) => {
	return (
		<div>
			<TextField
				label={label}
				fullWidth
				variant="standard"
				error={!!error}
				helperText={error?.message}
				type={type}
				{...register}
				ref={ref}
			/>
		</div>
	)
})
