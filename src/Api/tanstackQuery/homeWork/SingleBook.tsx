import { BookEntity } from './types'

type SingleBookProps = {
	book: BookEntity
}

export const SingleBook = ({
	book: { title, description, year },
}: SingleBookProps) => {
	return (
		<li>
			<h2>
				<strong>{title}</strong> ({year})
			</h2>
			<p>{description}</p>
		</li>
	)
}
