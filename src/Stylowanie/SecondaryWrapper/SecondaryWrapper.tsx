import { ReactNode, useState } from 'react'
import styles from './SecondaryWrapper.module.scss'
import clsx from 'clsx'
type SecondaryWrapperProps = {
	children: ReactNode
}

export const SecondaryWrapper = ({ children }: SecondaryWrapperProps) => {
	const [isActive, setIsActive] = useState(false)
	const [isPrimary, setIsPrimary] = useState(false)

	const toggleActive = () => {
		setIsActive((prev) => !prev)
	}
	const togglePrimary = () => {
		setIsPrimary((prev) => !prev)
	}

	return (
		<>
			<button onClick={togglePrimary}>Toggle Primary</button>
			<div
				className={clsx(styles.warpper, {
					[styles.active]: isActive,
					[styles.primary]: isPrimary,
				})}
				onClick={toggleActive}
				role="button"
			>
				{children}
			</div>
		</>
	)
}
