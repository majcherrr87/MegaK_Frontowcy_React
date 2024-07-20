import styled from 'styled-components'

type ButtonProps = {
	label: string
	onClick: () => void
}
const StyledButton = styled.button`
	border: none;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 20px;
	color: ${({ theme }) => theme.colors.primary};
`

export const Button = ({ label, onClick }: ButtonProps) => {
	return <StyledButton onClick={onClick}>{label}</StyledButton>
}
