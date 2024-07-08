import { ChangeEvent, FormEvent, useState } from 'react'
import { useCreateBookMutation } from './queries/useCreateBookMutation'

export const AddBook = () => {
	const [values, setValues] = useState({
		title: '',
		description: '',
		year: 2024,
	})
	const { mutate, isPending } = useCreateBookMutation()

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value, type } = e.target

		setValues((prevValues) => ({
			...prevValues,
			[name]: type === 'number' ? Number(value) : value,
		}))
	}
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		const { title, description, year } = values

		mutate({
			title,
			description,
			year,
		})

		setValues({
			title: '',
			description: '',
			year: 2024,
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div>
					<label htmlFor="title">Title</label>
				</div>
				<input
					type="text"
					name="title"
					id="title"
					value={values.title}
					onChange={handleChange}
				/>
			</div>
			<div>
				<div>
					<label htmlFor="description">Description</label>
				</div>
				<textarea
					name="description"
					id="description"
					value={values.description}
					onChange={handleChange}
				/>
			</div>
			<div>
				<div>
					<label htmlFor="year">Year</label>
				</div>
				<input
					type="number"
					name="year"
					id="year"
					value={values.year}
					onChange={handleChange}
				/>
			</div>
			<button type="submit" disabled={isPending}>
				Add book
			</button>
		</form>
	)
}
