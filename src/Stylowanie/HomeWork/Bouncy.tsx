import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Parent = styled.div`
	border: 5px solid red;
	background-color: #eee;
	position: relative;
	width: 600px;
	height: 600px;
`
const Child = styled.div<{ x: number; y: number; color: string }>`
	position: absolute;
	left: ${({ x }) => x}px;
	top: ${({ y }) => y}px;
	width: 50px;
	height: 50px;
	background: ${({ color }) => color};
`
const getRandomColor = () => {
	return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

export const Bouncy = () => {
	const [x, setX] = useState(Math.round(Math.random() * 600))
	const [y, setY] = useState(Math.round(Math.random() * 600))

	const xMultiplayer = useRef(1)
	const yMultiplayer = useRef(1)
	const color = useRef(getRandomColor())

	if (x > 550) {
		xMultiplayer.current = -1
		color.current = getRandomColor()
	}
	if (x < 0) {
		xMultiplayer.current = 1
		color.current = getRandomColor()
	}
	if (y > 550) {
		yMultiplayer.current = -1
		color.current = getRandomColor()
	}
	if (y < 0) {
		yMultiplayer.current = 1
		color.current = getRandomColor()
	}
	useEffect(() => {
		const interval = setInterval(() => {
			setX((prevX) => prevX + 10 * xMultiplayer.current)
			setY((prevY) => prevY + 10 * yMultiplayer.current)
		}, 100)
		return () => {
			clearInterval(interval)
		}
	}, [])
	return (
		<Parent>
			<Child x={x} y={y} color={color.current} />
		</Parent>
	)
}
