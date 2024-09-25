import { Outlet, useNavigation } from 'react-router-dom'
import { AppLink } from './AppLink'

export const MainLayout = () => {
	const { state } = useNavigation()
	return (
		<main>
			<header>
				<nav>
					<ul>
						<li>
							<AppLink to=".">Home</AppLink>
						</li>
						<li>
							<AppLink to="about">About</AppLink>
						</li>
						<li>
							<AppLink to="product">Product</AppLink>
						</li>
						<li>
							<AppLink to="product/details">Details</AppLink>
						</li>
						<li>
							<AppLink to="dashboard">Dashboard</AppLink>
						</li>
						<li>
							<AppLink to="path-with-loader">path-with-loader</AppLink>
						</li>
						<li>
							<AppLink to="ip-address">/ip-address/</AppLink>
						</li>
					</ul>
				</nav>
			</header>
			{state === 'loading' ? <p>Loading...</p> : <Outlet />}
		</main>
	)
}
