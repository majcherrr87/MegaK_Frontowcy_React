import { UserDetails } from './UserDetails'
import { UserMainData } from './UserMainData'

export const User = () => {
	return (
		<li>
			<UserMainData />
			<UserDetails />
		</li>
	)
}
