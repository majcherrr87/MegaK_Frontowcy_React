import { Provider } from 'react-redux'
import { MyIpAddress } from './components/MyIpAddress'
import { store } from './store'
import { Actions } from './components/Actions'

export const App = () => {
	return (
		<Provider store={store}>
			<Actions />
			<MyIpAddress />
			<MyIpAddress />
			<MyIpAddress />
			<MyIpAddress />
			<MyIpAddress />
			<MyIpAddress />
			<MyIpAddress />
			<MyIpAddress />
		</Provider>
	)
}
