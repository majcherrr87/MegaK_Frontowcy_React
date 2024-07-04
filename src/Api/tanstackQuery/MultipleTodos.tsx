import { useMultipleTodos } from './hooks/useMultipleTodos'

export const MultipleTodos = () => {
	const { data } = useMultipleTodos()
	console.log(data)
	return (
		<ul>
			{data.map((el) => (
				<li key={el?.id}>{el?.title}</li>
			))}
		</ul>
	)
}
