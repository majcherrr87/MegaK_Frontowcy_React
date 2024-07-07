import { useQuery } from '@tanstack/react-query'
import { Book } from '../types'

export const useGetBooksQuery = () => {
	const { data } = useQuery<Book[]>({
		queryKey: ['books'],
		queryFn: async () => {
			const response = await fetch('http://localhost:3000/books')
			return response.json()
		},
	})
	return { data }
}
