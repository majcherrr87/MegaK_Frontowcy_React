import { ReactElement } from 'react'
import styles from './styles.module.scss'

export type TooltipProps = {
	children: ReactElement
	text: string
}

export const Tooltip = ({ children, text }: TooltipProps) => {
	return (
		<div>
			{children}
			<div className={styles.tooltip}>{text}</div>
		</div>
	)
}
//31:30
