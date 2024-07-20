import { ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'

type StyledWrapperProps = {
	children: ReactNode
}

const StyledBox = styled.div<{
	color: string
	highlighted: boolean
	shadowColor: string
}>`
	background-color: ${({ color }) => color};
	padding: 5px;
	${({ highlighted }) =>
		highlighted
			? css<{ shadowColor: string }>`
					padding: 30px;
					box-shadow: 0px 0px 50px -10px ${({ shadowColor }) => shadowColor};
					border: 2px solid red;
				`
			: ''}
`

export const StyledWrapper = ({ children }: StyledWrapperProps) => {
	const [highlighted, setHighlighted] = useState(false)

	const toggleHighlighted = () => {
		setHighlighted((prev) => !prev)
	}
	return (
		<StyledBox color="green" shadowColor="green" highlighted={highlighted}>
			<button onClick={toggleHighlighted}>Toggle highlighted</button>
			<h1>{children}</h1>
		</StyledBox>
	)
}
