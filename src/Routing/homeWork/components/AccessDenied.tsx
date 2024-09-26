import { Link } from 'react-router-dom'

export const AccessDenied = () => {
	return (
		<div>
			<h1>Sorry, you heve no access to this part of the app.</h1>
			<Link to="/">Go back to home page </Link>
		</div>
	)
}
