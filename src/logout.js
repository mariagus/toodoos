import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "19091303066-f7vk8rcep7il2f299o1l9p77d19stlme.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
