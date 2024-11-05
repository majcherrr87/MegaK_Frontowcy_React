import { useShallow } from 'zustand/shallow'
import { useOrderStore } from '../store/useOrderStore'
import { useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export const useOrderRedirect = () => {
	const { order, shipping } = useOrderStore(
		useShallow((state) => ({
			order: state.order,
			shipping: state.shipping,
		})),
	)
	const navigate = useNavigate()

	const isOrderStepFullyFilled = () => {
		return !!order.title && !!order.configuration
	}
	const isOrderStepPartiallyFilled = () => {
		return !!order.title || !!order.configuration
	}
	const isShippingStepFullyFilled = () => {
		return !!shipping.city && !!shipping.postCode && !!shipping.street
	}
	const isShippingStepPartiallyFilled = () => {
		return !!shipping.city || !!shipping.postCode || !!shipping.street
	}

	useEffect(() => {
		if (isShippingStepFullyFilled()) {
			navigate({ to: '/summary' })
			return
		}
		if (isShippingStepPartiallyFilled()) {
			navigate({ to: '/shipping' })
			return
		}
		if (isOrderStepFullyFilled()) {
			navigate({ to: '/shipping' })
			return
		}
		if (isOrderStepPartiallyFilled()) {
			navigate({ to: '/order' })
			return
		}
	}, [])
}
