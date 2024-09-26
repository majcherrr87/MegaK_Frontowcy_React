import { Params } from 'react-router-dom'
import { apiCall } from '../utils/apiCall'

export const taskLoader = ({ params }: { params: Params<'id'> }) => {
	const { id } = params
	return apiCall(`tasks/${id}`)
}
