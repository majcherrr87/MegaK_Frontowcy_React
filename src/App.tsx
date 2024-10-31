import { Provider } from 'react-redux'
import { store } from './store'
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'

export const App = () => {
	return (
		<Provider store={store}>
			<TodoForm />
			<TodoList />
		</Provider>
	)
}
