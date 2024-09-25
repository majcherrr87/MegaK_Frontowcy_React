import { useSearchParams } from 'react-router-dom'

export const Payment = () => {
	const [searchParams] = useSearchParams()

	const status = searchParams.get('paymentStatus')
	const paymentId = searchParams.get('paymentId')
	return (
		<div>
			<h1>Paymanet [{paymentId}]</h1>
			<h2>Status [{status}]</h2>
		</div>
	)
}
