import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ip/')({
	loader: async ({ context }) => {
		console.log(context)
		const response = await fetch('https://api.ipify.org?format=json')
		return response.json() as Promise<{ ip: string }>
	},
	// beforeLoad: ({ context }) => {
	// 	if (context.value >= 1000) {
	// 		throw redirect({
	// 			to = '/',
	// 		})
	// 	}
	// },
})
