import { ReactNode } from 'react'
import styled from 'styled-components'

type TextProps = {
	children: ReactNode
}

const StyledText = styled.p`
	color: ${({ theme }) => theme.colors.background};
`

export const Text = ({ children }: TextProps) => {
	return <StyledText>{children}</StyledText>
}
