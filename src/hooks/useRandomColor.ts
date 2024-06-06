import { useEffect, useState } from 'react'

export const useRandomColor = (type: 'light' | 'dark') => {
	const [color, setColor] = useState('hsl(360, 100%, 85%)')

	useEffect(() => {
		const hue = Math.round(Math.random() * 360)
		const saturation = Math.round(Math.random() * 100)
		const threshold = 25

		const lightness =
			type === 'dark'
				? Math.round(Math.random() * threshold)
				: Math.round(Math.random() * (100 - threshold)) + threshold

		setColor(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
	}, [type])

	return { color, type }
}
