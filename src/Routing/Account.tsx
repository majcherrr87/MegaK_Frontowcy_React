import { Form, useFetcher, useSubmit } from 'react-router-dom'

export const Account = () => {
	const submit = useSubmit()
	const fetcher = useFetcher()
	console.log(fetcher.data)

	const handleSubmit = () => {
		submit({ title: 'lorem ipsum' }, { method: 'POST', action: '/create' })
	}

	return (
		<div>
			<h1>Account</h1>
			<Form method="POST" action="/create">
				<input type="text" name="title" />
				<button type="submit">Create</button>
			</Form>
			<fetcher.Form method="POST" action="/create">
				<input type="text" name="title" />
				<button type="submit">Create by fetcher</button>
			</fetcher.Form>
			<button type="button" onClick={handleSubmit}>
				Submit with useSubmit
			</button>
		</div>
	)
}
