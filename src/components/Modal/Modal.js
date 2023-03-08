import React from 'react'
import Button from '../Button/Button';
//	STYLES
import styles from './modal.module.css'


export default function Modal({ children, closeModal }) {
	return (
		<div className={styles.masking}>
			<div className={styles.modal}>
				{children}
				<div className={styles.buttoncontainer}>
					<Button
						title='close modal'
						variant='outlined'
						color='#3D0F0C'
						onClick={closeModal}
					/>
				</div>
			</div>
		</div>
	)
}