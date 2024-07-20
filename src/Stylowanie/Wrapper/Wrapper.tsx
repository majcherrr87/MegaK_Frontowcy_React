import { ReactNode } from 'react'
import styles from './Wrapper.module.scss'

type WrapperProps = {
	children: ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
	return <div className={styles.warpper}>{children}</div>
}
