import { useState } from 'react'
import { useApiTodos } from './useApiTodos'
import { TodosType } from '../types'

export const useTodoDelete = () => {
	const { apiDelete, errors, loading } = useApiTodos()
	const [data, setData] = useState<TodosType>()

	const deleteTodos = async (id: string) => {
		const response = await apiDelete<TodosType>(`todos/${id}`)
		if (response) setData(response)
	}

	return { data, errors, loading, deleteTodos }
}
