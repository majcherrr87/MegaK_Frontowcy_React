import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export const ErrorElement = () => {
	const error = useRouteError()

	const formatError = (appError: unknown) => {
		if (typeof appError === 'string') return appError

		if (isRouteErrorResponse(appError)) return appError.data

		if (appError instanceof Error) return appError.message
	}

	return (
		<div>
			<h1>Error</h1>
			<p>something went wrong! - {formatError(error)}</p>
		</div>
	)
}
