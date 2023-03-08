import React from 'react'
import Container from '../../components/Container/Container'
import styles from './aboutpage.module.css'
import { Device } from '../../context/UserDeviceContext'


export default function AboutPage() {
	const { isMobile } = Device();

	return (
		<div className={styles.aboutpage}>
			<h1>About me</h1>
			<Container border='1px solid white' maxWidth={!isMobile && '60%'}>
				<Container
					flexDirection='row'
					justifyContent='space-between'
					alignItems='end'
					padding='8px 16px'
					background='var(--complementary-color)'
					border='1px solid rgb(255,255,255,.5)'
				>
					<h2>ANDERS SÖDERBERG</h2>
					<h3>FRONTEND DEVELOPER</h3>
				</Container>

				<Container
					flexDirection='row'
					padding={0}
				>
					<Container background='white' flex={1}>
						<h3>Relevant education</h3>
						<p>2019 - 2021 EC-utbildning, Växjö (Yrkesutbildning, Frontend-utvecklare)</p>

					</Container>
					<Container background='white' flex={1}>
						<h3>Relevant work experience</h3>
						<p>2021 - 2023 Utvecklare Invono AB, Ljungby</p>
					</Container>
				</Container>

				<Container background='white'>
					<h3>As a developer</h3>
					<p>
						Meticulous developer that strives for not only code working as intended but also
						to be "DRY", easy to read and easy to maintain.
						Prefer to work in React since I love their solution with reusable components and flat architecture.
					</p>
					<p>
						I also spend a lot of my spare time coding and got some projects in production, whereof one for a company that had a revenue of 1.387 billion last year. This particular project receives data over the MQTT protocol and logs the values in real time in a chart. The logging starts by scanning a barcode of productnr. and the station number.
						It also features ability to save the data into csv, open previously saved csv files and print parts of or the whole screen to PDF.
					</p>
				</Container>
			</Container>
		</div>
	)
}
