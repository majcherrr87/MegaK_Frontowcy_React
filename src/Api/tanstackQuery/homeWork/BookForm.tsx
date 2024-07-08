import { ChangeEvent, FormEvent } from 'react'
import { BookDto } from './types'

type BookFormProps = {
	handleSubmit: (e: FormEvent) => void
	handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	values: BookDto
	isPending: boolean
}

export const BookForm = ({
	handleSubmit,
	handleChange,
	values,
	isPending,
}: BookFormProps) => {
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
				Save
			</button>
		</form>
	)
}
