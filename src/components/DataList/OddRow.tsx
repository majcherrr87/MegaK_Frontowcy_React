import { SingleElement } from '../../App'
import styles from './OddRow.module.scss'

export type OddRowProps = {
	element: SingleElement
}

export const OddRow = ({ element }: OddRowProps) => {
	return (
		<tr className={styles.row}>
			<td>
				<strong>{element.id}</strong>
			</td>
			<td>
				<strong>{element.name}</strong>
			</td>
			<td>
				<strong>{element.lastname}</strong>
			</td>
			<td>
				<strong>{element.age}</strong>
			</td>
			<td>
				<strong>{element.pesel || 'Brak numeru pesel'}</strong>
			</td>
		</tr>
	)
}
