import { useSeriesContext } from '../context/useSeriesContext'

export const SeriesMetaData = () => {
	const context = useSeriesContext()
	if (!context) return null
	const { start_data, end_data } = context
	return (
		<p>
			{start_data} do {end_data || 'teraz'}
		</p>
	)
}
