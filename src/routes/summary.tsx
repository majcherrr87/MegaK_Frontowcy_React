import { createFileRoute } from '@tanstack/react-router'
import { Summary } from '../pages/Summary'

export const Route = createFileRoute('/summary')({
	component: Summary,
})
