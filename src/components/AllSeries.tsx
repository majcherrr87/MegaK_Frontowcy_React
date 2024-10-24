import { SeriesContext } from '../context/SeriesContext'
import { useGetTVSeries } from '../queries/useGetTVSeries'
import { SingleSeries } from './SingleSeries'

export const AllSeriestsx = () => {
	const { data, isPending } = useGetTVSeries()

	if (isPending) return <p>Loading...</p>
	return (
		<div>
			<h1>Best Series</h1>
			<ul>
				{data?.tv_shows.map((show) => (
					<SeriesContext.Provider value={show} key={show.id}>
						<SingleSeries />
					</SeriesContext.Provider>
				))}
			</ul>
		</div>
	)
}
