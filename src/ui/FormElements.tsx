import { Box, styled } from '@mui/material'
import { ReactNode } from 'react'

export type FormElementsProps = {
	children: ReactNode
}

const GridContainer = styled(Box)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
	gap: theme.spacing(1),
}))

export const FormElements = ({ children }: FormElementsProps) => {
	return <GridContainer>{children}</GridContainer>
}
