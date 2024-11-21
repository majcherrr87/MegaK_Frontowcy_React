import { ReactNode } from 'react'

export type FooProps = {
	children: ReactNode
}

export const Foo = ({ children }: FooProps) => {
	return <div>{children}</div>
}
