import React, { useEffect } from "react";
import { gapi } from "gapi-script";
//  COMPONENTS
import Login from "./components/Login";
import Logout from "./components/Logout";
import Protected from "./components/Protected";


function App() {
  const clientId = process.env.REACT_APP_OATH_CLIENTID;

  // gapi?.auth2?.getAuthInstance()?.currentUser?.get()?.getAuthResponse()?.access_token
  useEffect(() => {
    function initClient() {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }

    gapi.load('client:auth2', initClient)
  }, []);

  return (
    <div>
      <Login />
      <Logout />

      <Protected>
        This is some protected content that will only show if you are logged in
      </Protected>
    </div>
  );
}

export default App;
