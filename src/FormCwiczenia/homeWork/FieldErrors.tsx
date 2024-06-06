type FieldErrorsProps = {
	errors: string[]
}

export const FieldErrors = ({ errors }: FieldErrorsProps) => {
	if (errors.length === 0) return null
	return (
		<span style={{ color: 'red' }}>
			{errors.map((error, index) => (
				<span key={index}> {error} </span>
			))}
		</span>
	)
}
