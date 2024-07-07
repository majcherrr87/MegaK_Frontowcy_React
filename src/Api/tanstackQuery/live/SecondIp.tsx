import { useGetIpQuery } from './queries/useGetIpQuery'

export const SecondIp = () => {
	const { data, isPending } = useGetIpQuery('v4')

	if (isPending) return <p>Loading your second ...</p>
	if (!data) return <p>Unexpected error happpened...</p>

	return <p>Your second IP v4: {data.ip}</p>
}
