import { useSuspenseQuery } from '@tanstack/react-query'
import { ipQueryOptions } from '../queries/ipQuery'

export const IP = () => {
	const { data } = useSuspenseQuery(ipQueryOptions)
	console.log(data.ip)
	return <h1>{data.ip}</h1>
}
