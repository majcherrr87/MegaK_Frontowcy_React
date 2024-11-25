import { useContext } from 'react'
import { InfoCardContext } from '../component/InfoCard/context/InfoCardContext'

export const useInfoCardContext = () => {
	return useContext(InfoCardContext)
}
