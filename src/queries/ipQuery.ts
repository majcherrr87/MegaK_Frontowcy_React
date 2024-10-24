import { queryOptions } from '@tanstack/react-query'

export const ipQueryOptions = queryOptions({
	queryKey: ['ip-addres'],
	queryFn: async () => {
		const response = await fetch('https://api.ipify.org?format=json')

		return response.json() as Promise<{ ip: string }>
	},
	staleTime: 30000,
})
