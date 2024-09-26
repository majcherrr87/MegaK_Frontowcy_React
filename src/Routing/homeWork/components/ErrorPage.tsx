import { Link } from 'react-router-dom'

export const ErrorPage = () => {
	return (
		<div>
			<h1>Something went wrong</h1>
			<Link to="/">Go to homepage</Link>
		</div>
	)
}
