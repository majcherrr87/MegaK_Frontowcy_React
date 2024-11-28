import { useLayoutEffect, useRef, useState } from 'react'

export const Foo = () => {
	const ref = useRef<HTMLHeadingElement>(null)
	const [config, setConfig] = useState<{
		x: number
		y: number
		width: number
		height: number
		active: boolean
	}>({
		x: 0,
		y: 0,
		width: 200,
		height: 100,
		active: false,
	})

	useLayoutEffect(() => {
		console.log('Effect', ref.current)
		if (!ref.current) return
		const { width, height, x, y } = ref.current.getBoundingClientRect()
		setConfig({ x, y, width, height, active: true })
	}, [])

	return (
		<div>
			<h1 ref={ref}>I am a Foo component</h1>
			<div
				style={{
					top: config.y,
					left: config.x,
					width: config.width,
					height: config.height,
					position: 'absolute',
					zIndex: -1,
					background: config.active ? 'red' : 'blue',
				}}
			/>
		</div>
	)
}
