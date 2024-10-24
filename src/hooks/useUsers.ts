import { SingleUser } from '../type'

export const useUsers = () => {
	const getUsers = (): SingleUser[] => [
		{ id: 1, name: 'AAA', lastName: 'aaa', age: 111 },
		{ id: 2, name: 'BBB', lastName: 'bbb', age: 222 },
		{ id: 3, name: 'CCC', lastName: 'ccc', age: 333 },
	]
	return { getUsers }
}
