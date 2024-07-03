import { useTopTodos } from './hooks/useTopTodos'

export const TopTodos = () => {
	const { topTodos } = useTopTodos()

	return (
		<div>
			<h2>Top 5 Todos</h2>
			<ul>
				{topTodos.map(({ id, title }) => (
					<li key={id}>{title}</li>
				))}
			</ul>
		</div>
	)
}
