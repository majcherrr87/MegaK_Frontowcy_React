import { useState } from 'react'
import { TodosDto, TodosType } from '../types'
import { useApi } from './useApi'

export const useTodoCreate = () => {
	const { apiPost, errors, loading } = useApi()
	const [data, setData] = useState<TodosType>()

	const createTodo = async (title: string) => {
		const response = await apiPost<TodosType, TodosDto>(`todos`, { title })
		if (response) setData(response)
	}

	return { data, errors, loading, createTodo }
}
