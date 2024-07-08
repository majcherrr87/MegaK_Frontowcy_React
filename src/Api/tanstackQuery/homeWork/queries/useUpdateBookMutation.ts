import { useMutation } from '@tanstack/react-query'
import { useApi } from '../hooks/useApi'
import { BookDto, BookEntity } from '../types'

export const useUpdateBookMutation = (bookId: string) => {
	const { apiPut } = useApi()
	const { mutate, isPending } = useMutation({
		mutationKey: ['books', 'update', bookId],
		mutationFn: async (payload: BookDto) => {
			return apiPut<BookEntity, BookDto>(`books/${bookId}`, payload)
		},
		onSuccess: () => {},
	})
	return { mutate, isPending }
}
