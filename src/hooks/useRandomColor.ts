import { useEffect, useState } from 'react'

type ColorType = 'dark' | 'light'

export const useRandomColor = (colorType: ColorType) => {
	const [color, setColor] = useState('hsl(360, 100%, 85%)')

	useEffect(() => {
		setColor(
			`hsl(${Math.round(Math.random() * 360)}, 100%, ${colorType === 'dark' ? '30%' : '70%'})`,
		)
	}, [colorType])

	return { color, colorType }
}
