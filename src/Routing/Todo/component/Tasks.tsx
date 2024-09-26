import { Link, useLoaderData } from 'react-router-dom'
import { SingleTask } from '../types/task'

export const Tasks = () => {
	const data = useLoaderData() as SingleTask[]
	return (
		<div>
			<h1>Tasks</h1>
			<ul>
				{data.map(({ id, title }) => (
					<li key={id}>
						<h2>{title}</h2>
						<Link to={id}>Go to details</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
