import { createContext } from 'react'

export type ThemeContextType = {
	mode: 'light' | 'dark'
}

export const ThemeContext = createContext<ThemeContextType>({
	mode: 'light',
})
