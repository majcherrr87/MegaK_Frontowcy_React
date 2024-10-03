import { createLazyFileRoute } from '@tanstack/react-router'
import { Ip } from '../../components/Ip'

export const Route = createLazyFileRoute('/ip/')({
	component: Ip,
})
