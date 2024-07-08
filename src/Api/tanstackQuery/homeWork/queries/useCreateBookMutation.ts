import { useMutation } from '@tanstack/react-query'
import { useApi } from '../hooks/useApi'
import { BookDto, BookEntity } from '../types'

export const useCreateBookMutation = () => {
	const { apipost } = useApi()
	const { mutate, isPending } = useMutation({
		mutationKey: ['books', 'create'],
		mutationFn: async (payload: BookDto) => {
			return apipost<BookEntity, BookDto>('books', payload)
		},
		onSuccess: () => {},
	})
	return { mutate, isPending }
}
