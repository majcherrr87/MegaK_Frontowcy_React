export type IpResponse = {
	ip: string
}
export type Pokemon = {
	name: string
	weight: number
}
export type PaginatedPeople = {
	first: number
	prev: number | null
	next: number | null
	last: number
	pages: number
	items: number
	data: {
		id: string
		name: string
	}[]
}
