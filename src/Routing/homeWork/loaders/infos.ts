import { SingleInfo } from '../types'
import { apiCall } from '../utils/apiCall'

export const infosLoader = async () => {
	return apiCall<SingleInfo[], string>('infos')
}
