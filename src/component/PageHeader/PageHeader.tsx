import { ReactNode } from 'react'
import styles from './PageHeader.module.scss'

export type PageHeaderProps = {
	children: ReactNode
}

export const PageHeader = ({ children }: PageHeaderProps) => {
	return <h2 className={styles.header}>{children}</h2>
}
