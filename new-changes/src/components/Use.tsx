import { use } from 'react'

export type UseProps = {
	dataPromise: Promise<number[]>
	visible: boolean
}

export const Use = ({ dataPromise, visible }: UseProps) => {
	if (!visible) return <p>I am hidden</p>
	const data = use(dataPromise)
	return (
		<ul>
			{data.map((el, index) => (
				<li key={index}>{el}</li>
			))}
		</ul>
	)
}
