import { SingleInfo, SingleInfoDto } from '../types'
import { apiCall } from '../utils/apiCall'

const updateInfo = async (request: Request) => {
	const formData = await request.formData()
	const title = formData.get('title')?.toString()
	const id = formData.get('id')?.toString()

	return apiCall<SingleInfo, SingleInfoDto>(`infos/${id}`, {
		method: 'PUT',
		body: {
			title: title || '',
		},
	})
}

const deleteInfo = async (request: Request) => {
	const formData = await request.formData()
	const id = formData.get('id')?.toString()

	return apiCall<SingleInfo, string>(`infos/${id}`, {
		method: 'DELETE',
	})
}

export const infoAction = async ({ request }: { request: Request }) => {
	const { method } = request

	switch (method) {
		case 'PUT':
			return updateInfo(request)
		case 'DELETE':
			return deleteInfo(request)
	}
}
