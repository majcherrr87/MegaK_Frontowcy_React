import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/succress')({
  component: () => <div>Hello /succress!</div>,
})
