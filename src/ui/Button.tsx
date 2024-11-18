import { Button as MUIButton } from '@mui/material'
import { ReactNode } from 'react'

export type ButtonProps = {
	type: 'submit' | 'button'
	children: ReactNode
}

export const Button = ({ children, type = 'button' }: ButtonProps) => {
	return <MUIButton type={type}>{children}</MUIButton>
}
