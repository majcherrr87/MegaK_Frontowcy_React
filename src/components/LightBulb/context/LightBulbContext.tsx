import { createContext } from 'react'

export type LightBulbContextType = {
	isOn: boolean
	setOn: (isOn: boolean) => void
}

export const LightBulbContext = createContext<LightBulbContextType>({
	isOn: false,
	setOn: () => {},
})
