import { useActionState } from 'react'
import { FormState } from '../types'
import { handler } from '../assets/handler'
import { FormStatus } from './FormStatus'

export const Form = () => {
	const [state, submitAction, isPending] = useActionState<FormState, FormData>(
		handler,
		{
			message: '',
			error: '',
		},
	)
	return (
		<div>
			<form>
				<input type="password" name="password" />
				<input type="submit" formAction={submitAction} value="Submit ;)" />
				<FormStatus />
			</form>
			{isPending && <p>[INFO] Loading...</p>}
			{state.message && <p>[SUCCRESS] {state.message}</p>}
			{state.error && <p>[ERROR] {state.error}</p>}
		</div>
	)
}
