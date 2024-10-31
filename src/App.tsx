import { Provider } from 'react-redux'
import { store } from './store'
import { Product } from './components/Product'
import { Actions } from './components/Actions'
import { Products } from './components/Products'
import { IpAdress } from './components/IpAdress'

export const App = () => {
	return (
		<Provider store={store}>
			<Product />
			<Products />
			<Actions />
			<IpAdress />
		</Provider>
	)
}
