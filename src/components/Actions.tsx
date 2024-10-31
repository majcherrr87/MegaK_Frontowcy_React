import { useAppDispatch } from '../hooks/useAppDispatch'
import { ipApiSlice, useGetIpAddressQuery } from '../slices/ipSlice'

export const Actions = () => {
	const { refetch } = useGetIpAddressQuery()
	const dispatch = useAppDispatch()

	const handleFirstRefetch = () => {
		refetch()
	}
	const handleSecondRefetch = () => {
		dispatch(
			ipApiSlice.endpoints.getIpAddress.initiate(undefined, {
				forceRefetch: true,
			}),
		)
	}
	const handleInvalidate = () => {
		dispatch(ipApiSlice.util.invalidateTags(['IP']))
	}

	return (
		<div>
			<button onClick={handleFirstRefetch}>Refetch #1</button>
			<button onClick={handleSecondRefetch}>Refetch #2</button>
			<button onClick={handleInvalidate}>Refetch #3</button>
		</div>
	)
}
