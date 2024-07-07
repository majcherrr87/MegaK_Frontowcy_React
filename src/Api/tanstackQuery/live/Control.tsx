import { useQueryClient } from '@tanstack/react-query'
import { keysFactory } from './keys'

export const Control = () => {
	const queryClient = useQueryClient()

	const RefetchV4 = () => {
		queryClient.invalidateQueries({
			queryKey: keysFactory.ip('v4'),
		})
	}
	const RefetchV6 = () => {
		queryClient.invalidateQueries({
			queryKey: keysFactory.ip('v6'),
		})
	}
	return (
		<>
			<button onClick={RefetchV4}>Refetch v4</button>
			<button onClick={RefetchV6}>Refetch v6</button>
		</>
	)
}
