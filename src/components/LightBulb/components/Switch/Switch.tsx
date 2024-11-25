import { useLightBulbContext } from '../../hooks/useLightBulbContext'
import styles from './styles.module.scss'

export const Switch = () => {
	const { isOn, setOn } = useLightBulbContext()
	return (
		<div
			onClick={() => setOn(!isOn)}
			className={`${styles.switch} ${isOn ? '' : styles.off}`}
		>
			{isOn ? 'OFF' : 'ON'}
		</div>
	)
}
