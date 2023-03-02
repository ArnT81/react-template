import React from 'react'
import { GoogleLogout } from 'react-google-login';


export default function Logout() {
  const clientId = process.env.REACT_APP_OATH_CLIENTID;

  const onSuccess = () => {
    console.log('Logged out succesfully');
  }


  return (
    <GoogleLogout
      clientId={clientId}
      buttonText='Logout'
      onLogoutSuccess={onSuccess}
    />
  )
}
