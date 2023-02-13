import { useState } from "react";

import "./landingPage.scss";
import { SignUpModal } from "../../components/molecules/SignUpModal";
import { LoginModal } from "../../components/molecules/LoginModal";
import { LoginTitle } from "../../components/atoms/LoginTitle";
import { SignUpTitle } from "../../components/atoms/SignUpTitle";

export const LandingPage = () => {
  const [isLoginActive, setIsLoginActive] = useState<boolean>(false);
  const [isSignUpActive, setIsSignUpActive] = useState<boolean>(false);

  return (
    <main className="landingPage">
      {isLoginActive && <LoginTitle />}
      {isSignUpActive && <SignUpTitle />}
      <section className="landingPage--header">
        <h1 className="landingPage--header__title">Sendy</h1>
        <h3 className="landingPage--header__subtitle">
          Connect with your friends!
        </h3>
      </section>

      <section className="landingPage--auth">
        <button
          onClick={() => setIsSignUpActive(true)}
          className="landingPage--auth--email__button"
        >
          Create an account
        </button>
        <div className="landingPage--footer">
          <button
            onClick={() => setIsLoginActive(true)}
            className="landingPage--footer__button"
          >
            Log in
          </button>
          <p>Or continue with</p>
        </div>
      </section>

      {isSignUpActive && (
        <SignUpModal onClose={() => setIsSignUpActive(false)} />
      )}

      {isLoginActive && <LoginModal onClose={() => setIsLoginActive(false)} />}
    </main>
  );
};
