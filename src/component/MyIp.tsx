import { useShallow } from 'zustand/shallow'
import { useIpStore } from '../store/useIpStore'

export const MyIp = () => {
	const [address, fetchMyIp] = useIpStore(
		useShallow((state) => [state.address, state.fetchMyIp]),
	)
	return (
		<>
			<div>
				My IP {address}
				<button onClick={fetchMyIp}>fetch my Ip</button>
			</div>
		</>
	)
}
