import { ReactNode } from 'react'

import styles from './styles.module.scss'
import { InfoCardContext } from './context/InfoCardContext'
import { InfoData } from '../../types'

export type InfoCardProps = {
	children: ReactNode
	item: InfoData
}

export const InfoCard = ({ children, item }: InfoCardProps) => {
	return (
		<div className={styles['info-box']}>
			<InfoCardContext.Provider value={{ item }}>
				{children}
			</InfoCardContext.Provider>
		</div>
	)
}
