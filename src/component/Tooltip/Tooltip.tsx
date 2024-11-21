import { ReactElement, useState } from 'react'
import styles from './styles.module.scss'
import { createPortal } from 'react-dom'

export type TooltipProps = {
	children: ReactElement
	text: string
}

export const Tooltip = ({ children, text }: TooltipProps) => {
	const [tooltipState, setTooltipState] = useState<{
		visible: boolean
		x: number
		y: number
	}>({
		visible: false,
		x: 0,
		y: 0,
	})

	const handleEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLDivElement
		const { y, x, height } = target.getBoundingClientRect()
		const tooltipY = window.scrollY + y + height
		const tooltipX = x
		setTooltipState({ visible: true, y: tooltipY, x: tooltipX })
	}
	const handleLeave = () => {
		setTooltipState({ visible: false, y: 0, x: 0 })
	}
	return (
		<div>
			<div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
				{children}
			</div>
			{tooltipState.visible
				? createPortal(
						<div
							className={styles.tooltip}
							style={{
								left: tooltipState.x,
								top: tooltipState.y,
							}}
						>
							{text}
						</div>,
						document.getElementById('tooltip')!,
					)
				: null}
		</div>
	)
}
