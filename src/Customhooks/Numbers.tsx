import { useNumbres } from '../hooks/useNumbres'

export const Numbers = () => {
	const { numbers, addNumber, deleteNumber } = useNumbres()

	return (
		<div>
			<button onClick={addNumber}>add Number</button>
			<ul>
				{numbers.map((number, index) => (
					<li key={index}>
						{number}
						<button onClick={() => deleteNumber(index)}> Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}
