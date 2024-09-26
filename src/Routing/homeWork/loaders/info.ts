import { Params } from 'react-router-dom'
import { SingleInfo } from '../types'
import { apiCall } from '../utils/apiCall'

export const infoLoader = async ({ params }: { params: Params<'id'> }) => {
	return apiCall<SingleInfo, string>(`infos/${params.id}`)
}
