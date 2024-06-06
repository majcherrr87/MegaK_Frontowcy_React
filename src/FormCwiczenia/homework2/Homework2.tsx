import { ChangeEvent, useState } from 'react'
import { TextStats } from './TextStats'

export const Homework2 = () => {
	const [text, settext] = useState('')
	const [status, setStatus] = useState('hide')

	const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		settext(e.target.value)
	}
	const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.target.value)
	}

	return (
		<>
			<div>
				<label htmlFor="text"></label>
				<textarea
					name="text"
					value={text}
					id="text"
					onChange={handleTextChange}
				></textarea>
			</div>
			<div>
				<label htmlFor="show">Show Status</label>
				<input
					type="radio"
					name="stats"
					value="show"
					id="show"
					checked={status === 'show'}
					onChange={handleStatusChange}
				/>
			</div>
			<div>
				<label htmlFor="hide">Hide Status</label>
				<input
					type="radio"
					name="stats"
					value="hide"
					id="hide"
					checked={status === 'hide'}
					onChange={handleStatusChange}
				/>
			</div>
			{status === 'show' && <TextStats text={text} />}
		</>
	)
}
