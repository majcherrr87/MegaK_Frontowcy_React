import { useFormStatus } from 'react-dom'

export const FormStatus = () => {
	const { action, data, method, pending } = useFormStatus()

	console.log('action', action)
	console.log('data', data)
	console.log('method', method)
	console.log('pending', pending)

	const password: string = data?.get('password') as string

	return (
		<div>
			{pending && (
				<p>The form is processoing your request with data - {password}!</p>
			)}
		</div>
	)
}
