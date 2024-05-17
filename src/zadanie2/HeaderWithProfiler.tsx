import { Header } from './Header'
import { UserProfiler } from './UserProfiler'

export const HeaderWithProfiler = () => {
	const userEmail = 'example@email.com'
	return (
		<Header title="Lorem Ipsum">
			<UserProfiler email={userEmail} />
		</Header>
	)
}
