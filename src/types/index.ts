export type ConfigContextType = {
	colors: {
		primary: string
		secondary: string
	}
}
// exercise 2

export type TVSeries = {
	id: number
	name: string
	start_data: string
	end_data: string | null
	country: string
	network: string
}

export type TVSeriesResponse = {
	total: number
	page: number
	pages: number
	tv_shows: TVSeries[]
}
