import { Link } from '@tanstack/react-router'
import { PageHeader } from '../component/PageHeader'
import { useOrderRedirect } from '../hooks/useOrderRedirect'

export const Home = () => {
	useOrderRedirect()
	return (
		<>
			<PageHeader>Begin your process</PageHeader>
			<p>You can start your order by clicking this button:</p>
			<Link to="/order">Start order</Link>
		</>
	)
}
