import { ReactElement, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'

export type SecondTooltipProps = {
	children: ReactElement
	text: string
}

export const SecondTooltip = ({ children, text }: SecondTooltipProps) => {
	const [tooltipState, setTooltipState] = useState<{
		visible: boolean
		x: number
		y: number
	}>({
		visible: false,
		x: 0,
		y: 0,
	})

	const elementRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!elementRef || !elementRef.current) return

		const firstChild = elementRef.current.firstChild

		if (!firstChild) return
		firstChild.addEventListener('mouseenter', handleEnter)
		firstChild.addEventListener('mouseleave', handleLeave)

		return () => {
			firstChild.removeEventListener('mouseenter', handleEnter)
			firstChild.removeEventListener('mouseleave', handleLeave)
		}
	}, [elementRef])

	const handleEnter = (e: Event) => {
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
		<div ref={elementRef}>
			{children}
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
