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
			<label>
				{label}
				<input type={type} {...register} ref={ref} />
				{error && <span style={{ color: 'red' }}>{error.message}</span>}
			</label>
		</div>
	)
})
