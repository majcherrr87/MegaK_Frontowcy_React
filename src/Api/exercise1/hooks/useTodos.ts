import { useEffect, useState } from 'react'
import { useApiTodos } from './useApiTodos'
import { TodosType } from '../types'

export const useTodos = () => {
	const { apiGet, errors, loading } = useApiTodos()
	const [data, setData] = useState<TodosType[]>()

	const getTodos = async () => {
		const response = await apiGet<TodosType[]>('todos')
		if (response) setData(response)
	}

	const removeTodo = (id: string) => {
		setData((prevTodos) => prevTodos?.filter((todo) => todo.id !== id))
	}
	const addTodo = (todo: TodosType) => {
		setData((prevTodos) => [...(prevTodos || []), todo])
	}

	useEffect(() => {
		getTodos()
	}, [])
	return { data, errors, loading, removeTodo, addTodo }
}
