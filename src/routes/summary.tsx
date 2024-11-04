import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/summary')({
  component: () => <div>Hello /summary!</div>,
})
