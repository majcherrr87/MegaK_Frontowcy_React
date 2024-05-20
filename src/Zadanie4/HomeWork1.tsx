import { useState } from 'react'

type PositionType = {
	mouseX: number
	mouseY: number
}

export const HomeWork = () => {
	const [position, setPosition] = useState<PositionType>({
		mouseX: 0,
		mouseY: 0,
	})

	const handleMouseMove = (e: MouseEvent) => {
		console.log('move', e)
		const mouseX = e.clientX
		const mouseY = e.clientY
		setPosition({ mouseX, mouseY })
	}
	return (
		<div
			onMouseMove={handleMouseMove}
			style={{
				width: 500,
				height: 500,
				border: '1px solid red',
				padding: 10,
			}}
		>
			X: {position.mouseX}
			Y: {position.mouseY}
		</div>
	)
}
