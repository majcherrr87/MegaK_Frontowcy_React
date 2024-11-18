import { ReactNode } from 'react'
import { Typography } from './Typography'

export type PageHeaderProps = {
	children: ReactNode
}

export const PageHeader = ({ children }: PageHeaderProps) => {
	return <Typography variant="h1">{children}</Typography>
}
