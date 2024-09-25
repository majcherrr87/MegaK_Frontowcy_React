import { useEffect, useState } from 'react'

type User = {
	id: string
	name: string
}

export const useUser = (): { user: User | null; loading: boolean } => {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		setInterval(() => {
			if (Math.random() > 0.5) setUser(null)
			else {
				setUser({ id: 'aaaa', name: 'Lisa' })
				setLoading(false)
			}
		}, 2000)
	}, [])

	return { user, loading }
}
