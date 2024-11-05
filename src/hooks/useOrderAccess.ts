import { useShallow } from 'zustand/shallow'
import { useOrderStore } from '../store/useOrderStore'
import { useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export const useOrderAccess = (
	step: 'order' | 'shipping' | 'summary' | 'success',
) => {
	const { order, shipping } = useOrderStore(
		useShallow((state) => ({
			order: state.order,
			shipping: state.shipping,
		})),
	)
	const navigate = useNavigate()

	const isOrderStepFilled = () => {
		return !!order.title && !!order.configuration
	}
	const isShippingStepFilled = () => {
		return !!shipping.city && !!shipping.postCode && !!shipping.street
	}
	useEffect(() => {
		switch (step) {
			case 'shipping': {
				if (!isOrderStepFilled()) navigate({ to: '/' })
				break
			}
			case 'summary': {
				if (!isShippingStepFilled()) navigate({ to: '/' })
				break
			}
			case 'success': {
				if (!isShippingStepFilled()) navigate({ to: '/' })
				break
			}

			default:
				break
		}
	}, [step])
}
