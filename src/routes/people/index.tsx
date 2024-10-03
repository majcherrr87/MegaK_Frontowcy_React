import { createFileRoute, Link } from '@tanstack/react-router'
import { peopleLoader } from './-loaders'

type PeopleSeach = {
	page: number
	size: number
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

			<Link
				to="."
				search={(prev) => ({
					...prev,
					size: 3,
				})}
			>
				3
			</Link>
		</div>
	)
}

export const Route = createFileRoute('/people/')({
	validateSearch: (search: Record<string, unknown>): PeopleSeach => ({
		page: Number(search?.page ?? 1),
		size: Number(search?.size ?? 10),
	}),
	loaderDeps: ({ search }) => ({ page: search.page, size: search.size }),
	loader: ({ deps: { page, size } }) => peopleLoader(page, size),
	component: People,
})
