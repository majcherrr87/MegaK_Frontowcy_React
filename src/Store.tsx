import { useSyncExternalStore } from 'react'
import { dataStore } from './store/data'

export const Store = () => {
	const elements = useSyncExternalStore(
		dataStore.subscribe,
		dataStore.getElements,
	)

	const handleClick = () => {
		const newValue = `kot ${Math.round(Math.random() * 100)} Lisa`
		dataStore.addNewElements(newValue)
	}

	return (
		<div>
			<button onClick={handleClick}>Add new Element</button>
			<ul>
				{elements.map((element, index) => (
					<li key={index}>{element}</li>
				))}
			</ul>
		</div>
	)
}
