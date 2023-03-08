import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import styles from './modalpage.module.css'


export default function ModalPage() {
	const [showModal, setShowModal] = useState('')

	const handleModal = (modal) => {
		modal ? setShowModal(modal) : setShowModal('')
	}


	return (
		<div className={styles.modalpage}>
			<Button
				title='toggle modal'
				onClick={() => handleModal('important shit')}
			/>

			{showModal === 'important shit' &&
				<Modal closeModal={() => handleModal()} >
					Really important shit!
				</Modal>
			}
		</div>
	)
}
