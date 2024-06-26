import { useEffect } from 'react'
import { useApi } from './hooks/useApi'

export type Entity = {
	id: string
	prop1: string
	prop2: number
}

export const List = () => {
	const { get, data, loading, error } = useApi<Entity[]>()

	useEffect(() => {
		get('collection1')
	}, [])

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error}</p>
	return (
		<ul>
			{data?.map(({ id, prop1, prop2 }) => (
				<li key={id}>
					{prop1} - {prop2}
				</li>
			))}
		</ul>
	)
}
