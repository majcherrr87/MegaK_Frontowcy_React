import { useGetBooksQuery } from './queries/useGetBooksQuery'

export const BookStats = () => {
	const { data, isFetching } = useGetBooksQuery()
	if (isFetching) return <p>Loadnig book stats...</p>
	return <div>Book count: {data?.length || 'No data'}</div>
}
