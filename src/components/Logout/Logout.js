import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { UserAuth } from '../../context/AuthContext';


export default function Logout() {
  const { updateUser, user } = UserAuth()
  const clientId = process.env.REACT_APP_OATH_CLIENTID;

  if (!user) {
    return null
  }

  else {
    return (
      <GoogleLogout
        clientId={clientId}
        buttonText='Logga ut'
        onLogoutSuccess={() => updateUser()}
      />
    )
  }
}