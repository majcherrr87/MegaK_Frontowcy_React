import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './App'
import './style.scss'
import { AppCwicz } from './Routing/cwiczenia/AppCwicz'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppCwicz />
	</React.StrictMode>,
)
