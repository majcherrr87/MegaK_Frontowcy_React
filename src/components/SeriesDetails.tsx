import { useSeriesContext } from '../context/useSeriesContext'

export const SeriesDetails = () => {
	const context = useSeriesContext()
	if (!context) return null
	const { name, country, network } = context
	return (
		<div>
			<h2>{name}</h2>
			<p>
				{network} - {country}
			</p>
		</div>
	)
}
