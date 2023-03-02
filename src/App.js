import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { gapi } from "gapi-script";
import Authorized from "./components/Authorized";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const clientId = process.env.REACT_APP_OATH_CLIENTID;

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }

    gapi.load('client:auth2', start)
  }, []);


  // gapi?.auth2?.getAuthInstance()?.currentUser?.get()?.getAuthResponse()?.access_token




  return (
    <div>
      <Login setIsLoggedIn={setIsLoggedIn} />
      <Logout />

      <Authorized isLoggedIn={isLoggedIn}>
        hello
      </Authorized>
    </div>
  );
}

export default App;
