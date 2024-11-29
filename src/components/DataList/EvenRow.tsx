import { SingleElement } from '../../App'
import styles from './EvenRow.module.scss'

export type EvenRowProps = {
	element: SingleElement
}

export const EvenRow = ({ element }: EvenRowProps) => {
	return (
		<tr className={styles.row}>
			<td>{element.id}</td>
			<td>{element.name}</td>
			<td>{element.lastname}</td>
			<td>{element.age}</td>
			<td>{element.pesel || 'Brak numeru pesel w componencie Evenrow'}</td>
		</tr>
	)
}
