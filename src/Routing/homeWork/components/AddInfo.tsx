import { Form, useActionData } from 'react-router-dom'
import { SingleInfo } from '../types'
import { useEffect, useState } from 'react'

export const AddInfo = () => {
	const data = useActionData() as SingleInfo | undefined
	const [title, settitle] = useState('')

	useEffect(() => {
		settitle('')
	}, [data])

	return (
		<div>
			<h1>Create new Info</h1>
			<Form method="POST">
				<input
					type="text"
					name="title"
					value={title}
					onChange={(e) => settitle(e.target.value)}
				/>
				<button type="submit">Add info</button>
			</Form>
			{data ? <p>Info {data.title} was created</p> : null}
		</div>
	)
}
