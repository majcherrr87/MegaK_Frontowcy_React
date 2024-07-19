import { useState } from 'react'
import { EditBook } from './EditBook'
import { BookEntity } from './types'
import { DeleteBookConfirmation } from './DeleteBookConfirmation'

type SingleBookProps = {
	book: BookEntity
}

export const SingleBook = ({ book }: SingleBookProps) => {
	const [mode, setMode] = useState<'edit' | 'delete' | 'none'>('none')

	const toogleEditMode = () => {
		setMode((prev) => (prev === 'edit' ? 'none' : 'edit'))
	}
	const toogleDeleteMode = () => {
		setMode((prev) => (prev === 'delete' ? 'none' : 'delete'))
	}

	return (
		<li>
			<h2>
				<strong>{book.title}</strong> ({book.year})
			</h2>
			<p>{book.description}</p>

			<button onClick={toogleEditMode}>
				{mode === 'edit' ? 'Cancel' : 'Edit'}
			</button>
			{mode === 'edit' ? <EditBook book={book} /> : undefined}

			<button onClick={toogleDeleteMode}>
				{mode === 'delete' ? 'Cancel' : 'Delete'}
			</button>
			{mode === 'delete' ? (
				<DeleteBookConfirmation book={book} onCancel={toogleDeleteMode} />
			) : undefined}
		</li>
	)
}
