import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Container } from '../component/Container'
import { MainHeader } from '../component/MainHeader'

export const Route = createRootRoute({
	component: () => (
		<Container>
			<MainHeader>OrderApp</MainHeader>
			<Outlet />
		</Container>
	),
})
