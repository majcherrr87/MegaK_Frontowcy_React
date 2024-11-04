import { ReactNode } from 'react'
import style from './style.module.scss'

export type ContainerProps = {
	children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
	return <div className={style.container}>{children}</div>
}
