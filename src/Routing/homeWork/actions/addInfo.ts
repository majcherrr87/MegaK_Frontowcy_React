import { SingleInfo, SingleInfoDto } from '../types'
import { apiCall } from '../utils/apiCall'

export const addInfoAction = async ({ request }: { request: Request }) => {
	const formData = await request.formData()
	const title = formData.get('title')?.toString()
	return apiCall<SingleInfo, SingleInfoDto>('infos', {
		method: 'POST',
		body: { title: title || '' },
	})
}
