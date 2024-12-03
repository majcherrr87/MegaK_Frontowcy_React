import { EmailFormState } from '../types'

export const emailHandler = async (_: EmailFormState, formData: FormData) => {
	const email = formData.get('email')

	if (!email || typeof email !== 'string')
		return { message: 'Something went wrong!' }

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
		console.log('SUCCESSS', result)
		return {
			message: 'Success',
		}
	} catch (e) {
		console.log(`FAILURE ${e}`)
		return { message: 'An error happened' }
	}
}
