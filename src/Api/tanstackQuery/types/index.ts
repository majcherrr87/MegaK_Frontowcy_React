export type TodosType = {
	id: string
	title: string
}
export type TodosDto = {
	title: string
}
export type SubTodo = TodosType & {
	todoId: string
}

export type TodoWithSubTodos = TodosType & {
	subtodos: SubTodo[]
}
export type SubToDoDto = TodosDto & {
	todoId: string
}
