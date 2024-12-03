import { FormState } from '../types'

export const handler = async (_: FormState, formData: FormData) => {
	const CORRECT_PASSWORD = 'loremipsum'
	const password = formData.get('password')

	return new Promise<FormState>((resolve) => {
		setTimeout(() => {
			if (password === CORRECT_PASSWORD) {
				resolve({
					message: 'You got the access!',
					error: '',
				})
			} else {
				resolve({
					message: '',
					error: 'This is the wrong password!',
				})
			}
		}, 1000)
	})
}
