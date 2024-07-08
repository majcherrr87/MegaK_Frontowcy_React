import { useState } from 'react'
import { EditBook } from './EditBook'
import { BookEntity } from './types'

type SingleBookProps = {
	book: BookEntity
}

export const SingleBook = ({ book }: SingleBookProps) => {
	const [isEditing, setIsEditing] = useState(false)

	const toogleEditMode = () => {
		setIsEditing((prevValue) => !prevValue)
	}

	return (
		<li>
			<h2>
				<strong>{book.title}</strong> ({book.year})
			</h2>
			<p>{book.description}</p>
			<button onClick={toogleEditMode}>{isEditing ? 'Cancel' : 'Edit'}</button>
			{isEditing ? <EditBook book={book} /> : undefined}
		</li>
	)
}
