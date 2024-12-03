import { useActionState, useOptimistic } from 'react'
import { EmailFormState } from '../types'

type EmailFormProps = {
	currentEmail: string
	onEmailUpdate: (email: string) => void
}

export const EmailForm = ({ currentEmail, onEmailUpdate }: EmailFormProps) => {
	const [userEmail, setUserEmail] = useOptimistic(currentEmail)

	const emailHandler = async (_: EmailFormState, formData: FormData) => {
		const email = formData.get('email')

		if (!email || typeof email !== 'string')
			return { message: 'Something went wrong!' }

		setUserEmail(email)

		const asyncOpt = new Promise<boolean>((result, reject) => {
			setTimeout(() => {
				const randomValue = Math.random()

				if (randomValue > 0.5) {
					result(true)
				} else {
					reject()
				}
			}, 2000)
		})
		try {
			const result = await asyncOpt
			onEmailUpdate(email)
			console.log('SUCCESSS', result)
			return {
				message: 'Success',
			}
		} catch (e) {
			console.log(`FAILURE ${e}`)
			return { message: 'An error happened' }
		}
	}

	const [state, submitAction, isPending] = useActionState<
		EmailFormState,
		FormData
	>(emailHandler, {
		message: '',
	})

	return (
		<div>
			<h1>
				{userEmail} {isPending && '- Loading...'} {state.message}
			</h1>
			<form>
				<input type="email" name="email" />
				<input type="submit" formAction={submitAction} value="Submit ;)" />
			</form>
		</div>
	)
}
