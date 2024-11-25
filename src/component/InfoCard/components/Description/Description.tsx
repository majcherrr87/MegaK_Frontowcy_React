import { useInfoCardContext } from '../../../../hooks/useInfoCardContext'
import styles from './styles.module.scss'

export const Description = () => {
	const {
		item: { description },
	} = useInfoCardContext()

	return (
		<div className={styles.description}>
			<p>{description}</p>
		</div>
	)
}
