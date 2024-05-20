import { useEffect, useState } from 'react'
import { useDebounceState } from '../hooks/useDebounceState'

export const Exerice2Hello = () => {
	const [value, setValue] = useState<string>('')
	const debouncedValue = useDebounceState(value, 1000)

	const handleClick = () => {
		setValue((prev) => `${prev}${Math.round(Math.random() * 9)}`)
	}

	useEffect(() => {
		console.log(`Starting to call API for search result for`, debouncedValue)
	}, [debouncedValue])

	return (
		<div>
			{value}
			<button onClick={handleClick}>Add letter</button>
		</div>
	)
}
