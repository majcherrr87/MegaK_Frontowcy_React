import styled from 'styled-components'

type ButtonProps = {
	label: string
}

const StyledButton = styled.button`
	border: none;
	padding: 20px;
	min-width: 200px;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.textPrimary};
`

export const Button = ({ label }: ButtonProps) => {
	return <StyledButton>{label}</StyledButton>
}
