import { useRef } from 'react'

export const useOneTimeRef = <T>(initFn: () => T) => {
	const value = useRef<T | null>(null)

	if (value.current === null) {
		value.current = initFn()
	}
	return value
}
