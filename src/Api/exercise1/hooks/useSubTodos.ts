import { useEffect, useState } from 'react'
import { useApiTodos } from './useApiTodos'
import { SubTodo, TodoWithSubTodos } from '../types'

export const useSubTodos = (todoId: string) => {
	const { apiGet, errors, loading } = useApiTodos()
	const [data, setData] = useState<SubTodo[]>()

	const getSubTodos = async () => {
		const response = await apiGet<TodoWithSubTodos>(
			`todos/${todoId}?_embed=subtodos`,
		)
		if (response) setData(response.subtodos)
	}
	useEffect(() => {
		getSubTodos()
	}, [])
	return {
		data,
		errors,
		loading,
		getSubTodos,
	}
}
