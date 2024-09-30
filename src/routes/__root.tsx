import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { Route as postsRoute } from './posts'

const RootComponent = () => {
	return (
		<div>
			<h1>MyApp</h1>
			<nav>
				<ul>
					<li>
						<Link to={'..'}>Home</Link>
					</li>
					<li>
						<Link to={'/posts'}>Posts</Link>
					</li>
					<li>
						<Link to={'/posts/new'}>New</Link>
					</li>
					<li>
						<Link to={'/posts/$postId'} params={{ postId: '1234F' }}>
							Post 1234F
						</Link>
					</li>
					<li>
						<Link to={postsRoute.fullPath}>Posts</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	)
}

export const Route = createRootRoute({
	component: RootComponent,
})
