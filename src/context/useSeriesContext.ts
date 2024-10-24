import { useContext } from 'react'
import { SeriesContext } from './SeriesContext'

export const useSeriesContext = () => {
	const context = useContext(SeriesContext)
	if (!context) throw new Error('you need context!')
	return context
}
