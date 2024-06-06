import { useEffect, useState } from 'react'
import { useInput } from './Hooks/useInput'

export const Exercise1V2 = () => {
	const selectInput = useInput('')
	const [value, setValue] = useState('')

	useEffect(() => {
		setValue(selectInput.value)
	}, [selectInput.value])

	return (
		<>
			<select {...selectInput}>
				{!selectInput.value && <option value="">Select an option</option>}
				<option value="first">First</option>
				<option value="second">Second</option>
				<option value="thied">Third</option>
			</select>
			<input type="text" name="value" value={value} readOnly />
		</>
	)
}
