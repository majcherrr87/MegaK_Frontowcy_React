import { use } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export type UseProps = {
	dataPromise: Promise<number[]>
	visible: boolean
}

export const Use = ({ dataPromise, visible }: UseProps) => {
	const theme = use(ThemeContext)
	if (!visible) return <p>I am hidden</p>
	const data = use(dataPromise)
	return (
		<>
			<p>Theme: {theme.mode}</p>
			<ul>
				{data.map((el, index) => (
					<li key={index}>{el}</li>
				))}
			</ul>
		</>
	)
}
