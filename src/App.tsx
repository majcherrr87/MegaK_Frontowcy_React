import { useState } from 'react'
import { Modal } from './component/Modal/Modal'
import { Page } from './component/Page/Page'

export const App = () => {
	const [isModal, setIsModal] = useState<boolean>(false)

	const handleShowModal = () => {
		setIsModal(true)
	}
	const handleCloseModal = () => {
		setIsModal(false)
	}

	return (
		<Page>
			<button onClick={handleShowModal}>Show Modal</button>
			{isModal && <Modal text="kot" tittle="lisa" onClose={handleCloseModal} />}
		</Page>
	)
}
