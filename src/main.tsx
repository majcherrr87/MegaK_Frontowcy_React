import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './App'
import { AppTodo } from './Routing/Todo/AppTodo'
import './style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppTodo />
	</React.StrictMode>,
)
