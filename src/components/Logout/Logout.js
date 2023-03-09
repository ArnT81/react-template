import React from 'react'
import { UserAuth } from '../../context/AuthContext';


export default function Logout() {
  const { logoutGoogle, user } = UserAuth()
  // const clientId = process.env.REACT_APP_OAUTH_CLIENTID;

  if (!user) {
    return null
  }

  else {
    return (
      <button
        /*  clientId={clientId}
         buttonText='Log out' */
        onClick={logoutGoogle}
      >
        Log out
      </button>
    )
  }
}
