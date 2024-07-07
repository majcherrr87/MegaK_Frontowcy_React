import { useQuery } from '@tanstack/react-query'
import { IpResponse } from '../types'
import { keysFactory } from '../keys'

export const useGetIpQuery = (type: 'v4' | 'v6') => {
	const { data, isPending } = useQuery<IpResponse>({
		queryKey: keysFactory.ip(type),
		queryFn: async () => {
			const response = await fetch(
				`https://api${type === 'v6' ? '64' : ''}.ipify.org?format=json`,
			)
			return response.json()
		},
	})
	return { data, isPending }
}
