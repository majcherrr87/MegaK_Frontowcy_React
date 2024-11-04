import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type IpStore = {
	uuid: string
	address: string
	fetchMyIp: () => Promise<void>
}

export const useIpStore = create<IpStore>()(
	persist(
		(set) => ({
			address: '',
			uuid: 'aaa',
			fetchMyIp: async () => {
				const response = await fetch('https://api.ipify.org?format=json')
				const data: { ip: string } = await response.json()
				set({
					address: data.ip,
				})
			},
		}),
		{
			name: 'ip-storge',
			version: 3,
			partialize: (state) => ({
				address: state.address,
			}),
		},
	),
)
