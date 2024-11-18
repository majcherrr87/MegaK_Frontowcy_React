import { Container as MUIContainer } from '@mui/material'
import { ReactNode } from 'react'

export type ContainerProps = {
	children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
	return <MUIContainer>{children}</MUIContainer>
}
