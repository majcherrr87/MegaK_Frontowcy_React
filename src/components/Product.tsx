import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const Product = () => {
	const { name, price } = useSelector((state: RootState) => state.product)
	if (!name) return <h1>Product doet not exist</h1>
	return (
		<>
			<div>
				<h1>Name: {name}</h1>
				<h2>Price: {price.toFixed(2)} PLN</h2>
			</div>
		</>
	)
}
