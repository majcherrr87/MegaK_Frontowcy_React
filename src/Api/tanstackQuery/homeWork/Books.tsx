import { useGetBooksQuery } from './queries/useGetBooksQuery'

export const Books = () => {
	const { data } = useGetBooksQuery()

	return (
		<>
			<p>Books</p>
			<ul>
				{data?.map(({ id, title, description, year }) => (
					<li key={id}>
						{title} {description} {year}
					</li>
				))}
			</ul>
		</>
	)
}
