import { styled } from '@mui/material'
import { Tooltip } from './Tooltip'

export type LabelWithTooltipProps = {
	text: string
	tooltip: string
}

const Container = styled('div')({
	position: 'relative',
})

export const LabelWithTooltip = ({ text, tooltip }: LabelWithTooltipProps) => {
	return (
		<Container>
			<label>{text}</label>
			<Tooltip x={10} y={10} tooltip={tooltip} />
		</Container>
	)
}
//10:30
