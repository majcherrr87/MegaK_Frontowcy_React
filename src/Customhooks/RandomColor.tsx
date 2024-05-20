import { useRandomColor } from '../hooks/useRandomColor'

export const RandomColor = () => {
	const { color, colorType } = useRandomColor('dark')

	return (
		<div
			style={{
				width: 100,
				height: 100,
				background: color,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{colorType}
		</div>
	)
}
