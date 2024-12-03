export type FormState = {
	message: string
	error: string
}
export type EmailFormState = Omit<FormState, 'error'>
