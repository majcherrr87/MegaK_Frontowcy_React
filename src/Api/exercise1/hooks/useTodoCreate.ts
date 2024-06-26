import { useState } from 'react'
import { useApiTodos } from './useApiTodos'
import { TodosDto, TodosType } from '../types'

export const useTodoCreate = () => {
	const { apiPost, errors, loading } = useApiTodos()
	const [data, setData] = useState<TodosType>()

	const createTodo = async (title: string) => {
		const response = await apiPost<TodosType, TodosDto>(`todos`, { title })
		if (response) setData(response)
	}

	return { data, errors, loading, createTodo }
}
