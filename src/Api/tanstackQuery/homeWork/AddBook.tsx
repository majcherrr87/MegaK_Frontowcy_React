import { ChangeEvent, FormEvent, useState } from 'react'
import { useCreateBookMutation } from './queries/useCreateBookMutation'
import { BookForm } from './BookForm'

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
		<BookForm
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			values={values}
			isPending={isPending}
		/>
	)
}
