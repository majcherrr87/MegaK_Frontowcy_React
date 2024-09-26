import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './App'
import './style.scss'
import { AppRouter } from './Routing/AppRouter'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>,
)
