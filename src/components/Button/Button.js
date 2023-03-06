import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';


export default function Button({ children, title, onClick, disabled }) {
	return (
		<button
			className={styles.button}
			onClick={onClick}
			disabled={disabled}
		>
			{title || children}
		</button>
	)
}
Button.defaultProps = {
	onClick: () => console.log('Add onClick prop')
}
Button.propTypes = {
	title: PropTypes.string
}