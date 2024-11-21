import { ReactNode } from 'react'
import styles from './styles.module.scss'

export type SectionProps = {
	children: ReactNode
}

export const Section = ({ children }: SectionProps) => {
	return <div className={styles.section}>{children}</div>
}
