import { useState } from 'react'
import { useApiTodos } from './useApiTodos'
import { SubTodo } from '../types'

export const useSubTodoDelete = () => {
	const { apiDelete, errors, loading } = useApiTodos()
	const [data, setData] = useState<SubTodo>()

	const deleteSubTodos = async (id: string) => {
		const response = await apiDelete<SubTodo>(`subtodos/${id}`)
		if (response) setData(response)
	}

	return { data, errors, loading, deleteSubTodos }
}
