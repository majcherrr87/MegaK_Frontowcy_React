import { createPortal } from 'react-dom'
import styles from './styles.module.scss'

export type ModalProps = {
	tittle: string
	text: string
	onClose: () => void
}

export const Modal = ({ text, tittle, onClose }: ModalProps) => {
	return createPortal(
		<>
			<div className={styles.backdrop} onClick={onClose}>
				<p>Look up!</p>
			</div>
			<div className={styles.container}>
				<div className={styles.modal}>
					<h2>{text}</h2>
					<p>{tittle}</p>
				</div>
			</div>
		</>,
		document.getElementById('modal')!,
	)
}
