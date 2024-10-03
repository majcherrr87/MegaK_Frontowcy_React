import { createFileRoute, Link } from '@tanstack/react-router'
import { peopleLoader } from './-loaders'

type PeopleSeach = {
	page: number
}

const People = () => {
	const { data, prev, next } = Route.useLoaderData()
	return (
		<div>
			<ul>
				{data.map(({ id, name }) => (
					<li key={id}>{name}</li>
				))}
			</ul>

			{prev ? (
				<Link
					to="."
					search={(prev) => ({
						...prev,
						page: (prev.page || 0) - 1,
					})}
				>
					Prev Page
				</Link>
			) : null}
			{next ? (
				<Link
					to="."
					search={(prev) => ({
						...prev,
						page: (prev.page || 0) + 1,
					})}
				>
					Next Page
				</Link>
			) : null}
		</div>
	)
}

export const Route = createFileRoute('/people/')({
	validateSearch: (search: Record<string, unknown>): PeopleSeach => ({
		page: Number(search?.page ?? 1),
	}),
	loaderDeps: ({ search }) => ({ page: search.page }),
	loader: ({ deps: { page } }) => peopleLoader(page),
	component: People,
})
