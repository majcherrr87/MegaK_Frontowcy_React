import { ReactNode, useState } from 'react'
import styles from './styles.module.scss'
import { Switch } from './components/Switch'
import { LightBulbContext } from './context/LightBulbContext'
import { ContentOn } from './components/ContentOn'
import { ContentOff } from './components/ContentOff'

export type LightBulbProps = {
	children: ReactNode
}

export const LightBulb = ({ children }: LightBulbProps) => {
	const [isOn, setOn] = useState<boolean>(false)

	return (
		<div className={styles.lightbulb}>
			<LightBulbContext.Provider value={{ isOn, setOn }}>
				{children}
			</LightBulbContext.Provider>
		</div>
	)
}
LightBulb.Switch = Switch
LightBulb.ContentOn = ContentOn
LightBulb.ContentOff = ContentOff
