import { FormEvent, useState } from 'react'
import { useGetSubTodosQuery } from './hooks/useGetSubTodosQuery'
import { useGetTodosQuery } from './hooks/useGetTodosQuery'
import { useTodoCreateMutation } from './hooks/useTodoCreateMutation'

export const Todos = () => {
	const [value, setValue] = useState('')
	const { mutate: createTodo } = useTodoCreateMutation()
	const { data, refetch } = useGetTodosQuery()
	const firstTodoId = data ? data[data.length - 1].id : undefined
	const { data: subtodos } = useGetSubTodosQuery(firstTodoId)

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
		createTodo(value)
	}

	if (!data || !subtodos) return null
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</form>
			<button type="button" onClick={() => refetch()}>
				Refresh todos
			</button>
			<ul>
				{data.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
			<hr />
			<ul>
				{subtodos.map((element) => (
					<li key={element.id}>{element.title}</li>
				))}
			</ul>
		</div>
	)
}
