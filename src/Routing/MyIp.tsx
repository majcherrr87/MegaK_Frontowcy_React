import { useLoaderData } from 'react-router-dom'
type IPResponse = {
	ip: string
}

export const MyIp = () => {
	const data = useLoaderData() as IPResponse
	console.log('ip', data)
	return <h1>{data.ip}</h1>
}
