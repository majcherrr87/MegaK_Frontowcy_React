import { useDeleteBookMutation } from './queries/useDeleteBookMutation'
import { BookEntity } from './types'

type DeleteBookConfirmationProps = {
	book: BookEntity
	onCancel: () => void
}

export const DeleteBookConfirmation = ({
	book,
	onCancel,
}: DeleteBookConfirmationProps) => {
	const { mutate, isPending } = useDeleteBookMutation(book.id)

	const handleDelete = () => {
		mutate()
	}
	if (isPending) return <p>Loading...</p>
	return (
		<div>
			<p>
				Do you really want to delete book <strong>{book.title}</strong>
			</p>
			<button onClick={handleDelete}>Delete</button>
			<button onClick={onCancel}>Cancel</button>
		</div>
	)
}
