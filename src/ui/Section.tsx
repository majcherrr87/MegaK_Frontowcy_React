import { Card, CardContent } from '@mui/material'
import { ReactNode } from 'react'

export type SectionProps = {
	children: ReactNode
}

export const Section = ({ children }: SectionProps) => {
	return (
		<Card variant="outlined">
			<CardContent>{children}</CardContent>
		</Card>
	)
}
