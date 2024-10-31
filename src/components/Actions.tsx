import { setName, setPrice } from '../slices/productSlice'
import { addProduct } from '../slices/productsSlice'
import { fetchIpAdress } from '../slices/ipSlice'
import { useAppDispatch } from '../hooks/useAppDispatch'

export const Actions = () => {
	const dispatch = useAppDispatch()

	const setProductName = () => {
		dispatch(setName('product 12345'))
	}
	const setProductPrice = () => {
		dispatch(setPrice(12345))
	}
	const addNewProduct = () => {
		dispatch(addProduct(`Product ${Math.round(Math.random() * 1000)}`))
	}
	const getIpAddress = () => {
		dispatch(fetchIpAdress())
	}

	return (
		<div>
			<button onClick={setProductName}>Set product Name</button>
			<button onClick={setProductPrice}>Set product Price</button>
			<button onClick={addNewProduct}>Add new product</button>
			<button onClick={getIpAddress}>Get Ip address</button>
		</div>
	)
}
