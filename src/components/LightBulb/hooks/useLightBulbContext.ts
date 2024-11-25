import { useContext } from 'react'
import { LightBulbContext } from '../context/LightBulbContext'

export const useLightBulbContext = () => {
	return useContext(LightBulbContext)
}
