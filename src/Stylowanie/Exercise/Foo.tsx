import styled from 'styled-components'
import { shadow } from './helpers'

const Element = styled.div<{ color: string }>`
	width: 200px;
	height: 200px;
	padding: 30px;
	border-radius: 10px;
	background: #eee;
	color: #111;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	${shadow}
`

export const Foo = () => {
	return (
		<Element color="green">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit vel
			voluptatibus laboriosam enim? Omnis suscipit possimus quod architecto
		</Element>
	)
}
