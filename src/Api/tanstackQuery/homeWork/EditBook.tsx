import { ChangeEvent, FormEvent, useState } from 'react'
import { BookEntity } from './types'
import { BookForm } from './BookForm'
import { useUpdateBookMutation } from './queries/useUpdateBookMutation'

type EditBookProps = {
	book: BookEntity
}

export const EditBook = ({
	book: { title, description, year, id },
}: EditBookProps) => {
	const { mutate, isPending } = useUpdateBookMutation(id)
	const [values, setValues] = useState({
		title,
		description,
		year,
	})

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
