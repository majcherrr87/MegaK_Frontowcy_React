import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

export const Container = ({ children }: Props) => <div>{children}</div>
