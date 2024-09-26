export type SingleTask = {
	id: string
	title: string
	description: string
}
export type SingleTaskDto = Omit<SingleTask, 'id'>
