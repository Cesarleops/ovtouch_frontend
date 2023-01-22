import axios from "axios";
import { useEffect, useState } from "react";

export const GoogleSignIn = () => {
  const [isLogged, setIsLogged] = useState(false);

  async function handleCredentialResponse(response) {
    //console.log("Encoded JWT ID token: " + response.credential);
    const body = { id_token: response.credential };
    const signIn = await axios
      .post("http://localhost:3031/api/auth/google", body)
      .then(({ data }) => {
        console.log("data", data);
        localStorage.setItem("email", data.user.email);
        setIsLogged(true);
      });
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "44633505999-vuqnjti0h0d8jhqgooi3kb38ia1ltg2l.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      {
        type: "icon",
        theme: "outline",
        size: "large",
      } // customization attributes
    );
  }, []);

  // also display the One Tap dialog
  const handleOnClick = () => {
    console.log(google.accounts.id);
    google.accounts.id.disableAutoSelect();
    google.accounts.id.revoke(localStorage.getItem("email"), () => {
      localStorage.clear();
      location.reload();
    });
    setIsLogged(false);
  };
  console.log(localStorage.getItem("email"));
  return (
    <>
      {!isLogged && <div id="buttonDiv"></div>}

      {isLogged && <button onClick={handleOnClick}>Sign Out</button>}
    </>
  );
};
