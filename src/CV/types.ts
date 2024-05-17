export interface Experiens {
	year: number
	description: string
}
export interface CVPersonal {
	photo: string
	name: string
	lastName: string
	position: string
}
export interface CVDetails {
	experience: Experiens[]
	education: string[]
}
export interface CVData {
	personal: CVPersonal
	details: CVDetails
}
