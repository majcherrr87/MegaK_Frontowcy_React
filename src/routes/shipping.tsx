import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shipping')({
  component: () => <div>Hello /shipping!</div>,
})
