import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const IpAdress = () => {
	const { error, loading, value } = useSelector((state: RootState) => state.ip)
	if (loading) return <p>Loading...</p>
	if (error) return <p>{error}</p>
	return <p>{value}</p>
}
