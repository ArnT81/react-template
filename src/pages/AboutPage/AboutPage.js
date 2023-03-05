import React from 'react'
import Container from '../../components/Container/Container'
import styles from './aboutpage.module.css'

export default function AboutPage() {
	return (
		<div className={styles.aboutpage}>

			<h1>About me</h1>

			<Container border='1px solid white'>
				<h2>Anders Söderberg</h2>
				<Container background='white'>

					<h3>Relevant education</h3>
					<p>
						2019 - 2021 EC-utbildning, Växjö
						Yrkesutbildning, Frontend-utvecklare
					</p>
				</Container>


				<h3>Relevant work experience</h3>
				<p>
					2021 - 2023 Utvecklare Invono AB, Ljungby
				</p>
			</Container>


		</div>
	)
}
