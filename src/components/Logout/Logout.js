import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { UserAuth } from '../../context/AuthContext';


export default function Logout() {
  const { updateUser, user } = UserAuth()
  const clientId = process.env.REACT_APP_OAUTH_CLIENTID;

  if (!user) {
    return null
  }

  else {
    return (
      <GoogleLogout
        clientId={clientId}
        buttonText='Log out'
        onLogoutSuccess={() => updateUser()}
      />
    )
  }
}
