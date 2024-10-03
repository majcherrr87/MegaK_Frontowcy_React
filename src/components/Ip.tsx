import { getRouteApi } from '@tanstack/react-router'

const ipRout = getRouteApi('/ip/')

export const Ip = () => {
	const { ip } = ipRout.useLoaderData()
	// const { value } = ipRout.useRouteContext()
	return <p>{ip} -</p>
}
