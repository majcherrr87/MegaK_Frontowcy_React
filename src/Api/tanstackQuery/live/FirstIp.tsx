import { useGetIpQuery } from './queries/useGetIpQuery'

export const FirstIp = () => {
	const { data, isPending } = useGetIpQuery('v4')

	if (isPending) return <p>Loading ...</p>
	if (!data) return <p>Unexpected error happpened...</p>

	return <p>Your IP v4: {data.ip}</p>
}
