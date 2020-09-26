import React from "react";
import ReactDOM from "react-dom";
import { GoogleLogin, useGoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

ReactDOM.render(
  <GoogleLogin
    clientId="19091303066-f7vk8rcep7il2f299o1l9p77d19stlme.apps.googleusercontent.com"
    buttonText="Login"
    isSignedIn={true}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={"single_host_origin"}
  />,
  document.getElementById("googleButton")
);
