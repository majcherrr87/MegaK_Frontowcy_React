import { useState } from 'react'
import { EmailForm } from './components/EmailForm'

export const App = () => {
	const [userEmail, setUserEmail] = useState('email@email.com')
	return (
		<>
			<EmailForm currentEmail={userEmail} onEmailUpdate={setUserEmail} />
		</>
	)
}
