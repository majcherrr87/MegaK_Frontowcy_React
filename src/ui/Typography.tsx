import { Typography as MUITopography } from '@mui/material'
import { ReactNode } from 'react'

export type TypographyProps = {
	children: ReactNode
	variant?: 'h1' | 'h2'
}

export const Typography = ({ children, variant }: TypographyProps) => {
	return <MUITopography variant={variant}>{children}</MUITopography>
}
