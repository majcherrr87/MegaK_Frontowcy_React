import { useDispatch } from 'react-redux'
import { setName, setPrice } from '../slices/productSlice'
import { addProduct } from '../slices/productsSlice'

export const Actions = () => {
	const dispatch = useDispatch()

	const setProductName = () => {
		dispatch(setName('product 12345'))
	}
	const setProductPrice = () => {
		dispatch(setPrice(12345))
	}
	const addNewProduct = () => {
		dispatch(addProduct(`Product ${Math.round(Math.random() * 1000)}`))
	}

	return (
		<div>
			<button onClick={setProductName}>Set product Name</button>
			<button onClick={setProductPrice}>Set product Price</button>
			<button onClick={addNewProduct}>Add new product</button>
		</div>
	)
}
