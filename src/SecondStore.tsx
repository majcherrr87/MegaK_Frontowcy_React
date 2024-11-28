import { useSyncExternalStore } from 'react'
import { dataStore } from './store/data'

export const SecondStore = () => {
	const elements = useSyncExternalStore(
		dataStore.subscribe,
		dataStore.getElements,
	)

	return <small>{elements.join(' | ')}</small>
}
