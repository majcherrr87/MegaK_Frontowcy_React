import { ReactNode } from 'react'
import { Typography } from './Typography'

export type SectionHeaderProps = {
	children: ReactNode
}

export const SectionHeader = ({ children }: SectionHeaderProps) => {
	return <Typography variant="h2">{children}</Typography>
}
