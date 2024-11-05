import { Link } from '@tanstack/react-router'
import { PageHeader } from '../component/PageHeader'
import { useEffect } from 'react'
import { useOrderStore } from '../store/useOrderStore'
import { useOrderAccess } from '../hooks/useOrderAccess'

export const Success = () => {
	useOrderAccess('success')
	const placeOrder = useOrderStore((state) => state.placeOrder)
	useEffect(() => {
		placeOrder()
	}, [])

	return (
		<>
			<PageHeader>Transaction seccessful!</PageHeader>
			<p>You order wasa placed without any issues.</p>
			<Link to="/">Go back to homepege</Link>
		</>
	)
}
//18:00
