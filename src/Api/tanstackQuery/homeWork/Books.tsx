import { AddBook } from './AddBook'
import { useGetBooksQuery } from './queries/useGetBooksQuery'
import { SingleBook } from './SingleBook'

export const Books = () => {
	const { data } = useGetBooksQuery()

	if (!data) return <p>Loading...</p>
	return (
		<div>
			<h1>Books</h1>
			<AddBook />
			<ul>
				{data.map((book) => (
					<SingleBook book={book} key={book.id} />
				))}
			</ul>
		</div>
	)
}
