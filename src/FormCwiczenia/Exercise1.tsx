import { ChangeEvent, useState } from 'react'

export const Exercise1 = () => {
	const [select, setSelect] = useState('')
	const [value, setValue] = useState('')

	const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target
		setSelect(value)
		setValue(value)
	}

	return (
		<>
			<select value={select} onChange={handleSelect}>
				{!select && <option value="">Select an option</option>}
				<option value="first">First</option>
				<option value="second">Second</option>
				<option value="thied">Third</option>
			</select>
			<input type="text" name="value" value={value} readOnly />
		</>
	)
}
