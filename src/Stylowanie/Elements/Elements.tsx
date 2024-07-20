import styled, { css } from 'styled-components'

const common = css<{ size: number }>`
	border-radius: 10px;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`
const getColoredValue = (first: string, second: string) => `
    background-color: ${first};
	border: 1px solid ${second};
`

const First = styled.div<{
	size: number
	firstColor: string
	secondColor: string
}>`
	${common}
	${({ firstColor, secondColor }) => getColoredValue(firstColor, secondColor)}
`
const Second = styled.div<{
	size: number
	firstColor: string
	secondColor: string
}>`
	${common}
	${({ firstColor, secondColor }) => getColoredValue(firstColor, secondColor)}
`

export const Elements = () => {
	return (
		<>
			<First size={250} firstColor="red" secondColor="green">
				Lorem ipsum
			</First>
			<Second size={150} firstColor="yellow" secondColor="blue">
				Lorem ipsum
			</Second>
		</>
	)
}
