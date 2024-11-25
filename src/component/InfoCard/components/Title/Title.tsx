import { useInfoCardContext } from '../../../../hooks/useInfoCardContext'
import styles from './styles.module.scss'

export const Title = () => {
	const {
		item: { title },
	} = useInfoCardContext()
	return <p className={styles.title}>{title}</p>
}
