import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TodosType } from '../types/index'

export const useTodoCreateMutation = () => {
	const queryClient = useQueryClient()
	const { mutate } = useMutation({
		mutationKey: ['todos'],
		mutationFn: async (title: string) => {
			const res = await fetch(`http://localhost:3000/todos`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({ title }),
			})
			return res.json()
		},
		onSuccess: (data) => {
			// queryClient.invalidateQueries({
			// 	queryKey: ['todos'],
			// })
			console.log('Success', data)
			queryClient.setQueryData<TodosType[]>(['todos'], (oldData) => {
				console.log('oldData', oldData)
				return [...(oldData || []), data]
			})
		},
	})
	return { mutate }
}
