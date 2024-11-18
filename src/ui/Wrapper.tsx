import { Stack } from '@mui/material'
import { ReactNode } from 'react'

export type WrapperProps = {
	children: ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
	return <Stack spacing={4}>{children}</Stack>
}
