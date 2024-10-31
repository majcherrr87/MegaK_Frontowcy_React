import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'

export const useAppDispath = () => {
	return useDispatch<AppDispatch>()
}
