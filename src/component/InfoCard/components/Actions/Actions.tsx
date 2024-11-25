import { useInfoCardContext } from '../../../../hooks/useInfoCardContext'
import styles from './styles.module.scss'

export const Actions = () => {
	const {
		item: { label },
	} = useInfoCardContext()

	return (
		<div>
			<button className={styles.button}>{label}</button>
		</div>
	)
}
