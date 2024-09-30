import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

const Root = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/lorem">Lorem</Link>
					</li>
					<li>
						<Link to="/dolor">Dolor</Link>
					</li>
					<li>
						<Link to="/value/$value" params={{ value: '1234567890' }}>
							Dolor
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	)
}

export const Route = createRootRoute({
	component: Root,
})
