import React from 'react'
import { UserAuth } from '../../context/AuthContext'

export default function ProfileImage({width, height}) {
	const { user } = UserAuth();
	if (!user) return null
	else return <img src={user.image} alt='profile' style={{ borderRadius: '50%' }} width={width} height={height} />
}

ProfileImage.defaultProps = {
	with: '40px',
	height: '40px'
}