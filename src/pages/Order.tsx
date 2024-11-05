import { FormEvent, useEffect } from 'react'
import { PageHeader } from '../component/PageHeader'
import { useInput } from '../hooks/useInput'
import { useOrderStore } from '../store/useOrderStore'
import { useShallow } from 'zustand/shallow'
import { useNavigate } from '@tanstack/react-router'
import { Stepper } from '../component/Stepper'

export const Order = () => {
	const { order, setOrderData } = useOrderStore(
		useShallow((state) => ({
			order: state.order,
			setOrderData: state.setOrderData,
		})),
	)
	const navigate = useNavigate()
	const titleInput = useInput(order.title)
	const desciptionInput = useInput(order.configuration)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		setOrderData({
			title: titleInput.value,
			configuration: desciptionInput.value,
		})

		navigate({ to: '/shipping' })
	}
	useEffect(() => {
		setOrderData({
			title: titleInput.value,
			configuration: desciptionInput.value,
		})
	}, [titleInput.value, desciptionInput.value])

	return (
		<>
			<Stepper step="order" />
			<PageHeader>Order</PageHeader>
			<p>Place fill your order configuration.</p>

			<form onSubmit={handleSubmit}>
				<div>
					<input type="text" name="title" placeholder="Title" {...titleInput} />
				</div>
				<div>
					<textarea placeholder="Configuration" {...desciptionInput} />
				</div>
				<button
					type="submit"
					disabled={!titleInput.value || !desciptionInput.value}
				>
					Proceed to next step
				</button>
			</form>
		</>
	)
}
