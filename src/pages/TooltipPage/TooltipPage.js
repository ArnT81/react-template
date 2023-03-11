import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Tooltip from '../../components/Tooltip/Tooltip'
import styles from './tooltippage.module.css'


export default function TooltipPage() {
	const [disabled, setDisabled] = useState(true)


	return (
		<div className={styles.tooltippage}>
			<h1>Hover the disabled button</h1>
			<Tooltip
				title='This button is disabled'
				active={disabled}
				position='top'
				background='var(--secondary-color)'
			>
				<Button
					title='example'
					disabled={disabled}
				/>
			</Tooltip>
			<Button
				title='toggle disabled state'
				onClick={() => setDisabled(!disabled)}
			/>
		</div>
	)
}
