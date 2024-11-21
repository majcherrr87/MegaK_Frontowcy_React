import { styled } from '@mui/material'
import { createPortal } from 'react-dom'

export type TooltipProps = {
	tooltip: string
	x: number
	y: number
}

const StyledTooltip = styled('div')<{ x: number; y: number }>(({ x, y }) => ({
	position: 'absolute',
	left: x,
	top: y,
	padding: 8,
	background: '#eee',
	border: '1px solid #ddd',
}))

export const Tooltip = ({ tooltip, x, y }: TooltipProps) => {
	return createPortal(
		<StyledTooltip x={x} y={y}>
			{tooltip}
		</StyledTooltip>,
		document.getElementById('portal')!,
	)
}
