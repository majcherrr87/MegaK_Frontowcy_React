import { styled } from '@mui/material'
import { ReactNode } from 'react'

export type SectionProps = {
	children: ReactNode
}

const StyledSection = styled('section')({
	padding: 20,
	borderRadius: 8,
	margin: 5,
	border: '1px solid #ccc',
	overflow: 'hidden',
})

export const Section = ({ children }: SectionProps) => {
	return <StyledSection>{children}</StyledSection>
}
