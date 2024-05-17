import { CatElements } from './CartElements'
import { CartHeader } from './CartHeader'
import { CartSummary } from './CartSummary'
import { CartItem } from './types'

export const Cart = () => {
	const elements: CartItem[] = [
		{ id: 1, name: 'Jabłko', price: 2.5, quantity: 10 },
		{ id: 2, name: 'Gruszka', price: 1.53, quantity: 90.4 },
	]
	return (
		<table>
			<CartHeader />
			<CatElements elements={elements} />
			<CartSummary elements={elements} />
		</table>
	)
}
