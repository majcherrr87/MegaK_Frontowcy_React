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
					<li>
						<Link to="/color/$r/$g/$b" params={{ r: '12', b: '23', g: '67' }}>
							1
						</Link>
					</li>
					<li>
						<Link to="/color/$r/$g/$b" params={{ r: '55', b: '23', g: '67' }}>
							2
						</Link>
					</li>
					<li>
						<Link to="/color/$r/$g/$b" params={{ r: '12', b: '156', g: '67' }}>
							3
						</Link>
					</li>
					<li>
						<Link to="/color/$r/$g/$b" params={{ r: '12', b: '23', g: '123' }}>
							4
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
