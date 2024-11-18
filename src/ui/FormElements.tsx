import { Box, styled } from '@mui/material'
import { ReactNode } from 'react'

export type FormElementsProps = {
	children: ReactNode
}

const GridContainer = styled(Box)({
	display: 'grid',
})

export const FormElements = ({ children }: FormElementsProps) => {
	return <GridContainer>{children}</GridContainer>
}
//41:50
