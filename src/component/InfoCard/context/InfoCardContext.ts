import { createContext } from 'react'
import { InfoData } from '../../../types'

export type InfoCardContextType = {
	item: InfoData
}

export const InfoCardContext = createContext<InfoCardContextType>({
	item: {
		title: '',
		description: '',
		label: '',
	},
})
