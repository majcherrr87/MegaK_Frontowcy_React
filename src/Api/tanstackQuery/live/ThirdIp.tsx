import { useGetIpQuery } from './queries/useGetIpQuery'

export const ThirdIp = () => {
	const { data, isPending } = useGetIpQuery('v6')

	if (isPending) return <p>Loading your third v6...</p>
	if (!data) return <p>Unexpected error happpened...</p>

	return <p>Your third IP v6: {data.ip}</p>
}
