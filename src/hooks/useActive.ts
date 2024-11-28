import { useDebugValue, useEffect, useState } from 'react'

export const useActive = () => {
	const [active, setActive] = useState(false)

	useDebugValue(active ? 'Active' : 'Inactive')

	useEffect(() => {
		setTimeout(() => {
			setActive((prev) => !prev)
		}, 5000)
	}, [])

	return active
}
