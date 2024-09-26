import { useState } from 'react'

export const useUserData = () => {
	const [isAuthorized] = useState(false)
	const [email] = useState('')

	return { email, isAuthorized }
}
