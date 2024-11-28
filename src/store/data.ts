let elements: string[] = ['lorem', 'ipsum']
const subscribers = new Set<() => void>()

export const dataStore = {
	getElements: () => {
		return elements
	},
	subscribe: (callback: () => void) => {
		subscribers.add(callback)
		return () => {
			subscribers.delete(callback)
		}
	},
	addNewElements: (title: string) => {
		console.log(title)
		elements = [...elements, title]

		subscribers.forEach((callback) => callback())
	},
}
