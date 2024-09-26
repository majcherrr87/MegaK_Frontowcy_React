import { apiCall } from '../utils/apiCall'

export const tasksLoader = async () => {
	return apiCall('tasks')
}
