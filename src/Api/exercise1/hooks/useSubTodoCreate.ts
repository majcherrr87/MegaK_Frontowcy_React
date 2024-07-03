import { useState } from 'react'
import { useApiTodos } from './useApiTodos'
import { SubToDoDto, SubTodo } from '../types'

export const useSubTodoCreate = () => {
	const { apiPost, errors, loading } = useApiTodos()
	const [data, setData] = useState<SubTodo>()

	const createSubTodo = async (title: string, todoId: string) => {
		const response = await apiPost<SubTodo, SubToDoDto>(`subtodos`, {
			title,
			todoId,
		})
		if (response) setData(response)
	}

	return { data, errors, loading, createSubTodo }
}
