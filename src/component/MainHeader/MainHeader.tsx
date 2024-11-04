import { ReactNode } from 'react'
import styles from './MainHeader.module.scss'

export type MainHeaderProps = {
	children: ReactNode
}

export const MainHeader = ({ children }: MainHeaderProps) => {
	return <h1 className={styles.hreder}>{children}</h1>
}
