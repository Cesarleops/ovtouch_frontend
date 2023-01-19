import React, { MouseEventHandler } from "react";

import "./signUpModal.scss";
// interface LoginModalProps {
//   onClose: MouseEventHandler<SVGElement>;
// }

export const SignUpModal = ({ onClose }) => {
  //   const { onClose } = props;

  return (
    <div className="signUpModal">
      <main className="signUpModal--container">
        <header className="signUpModal--container__header">
          <button onClick={onClose}>x</button>
          <h1 className="signUpModal--container__header__title">Sign Up</h1>
        </header>
        <form className="signUpModal--container__form">
          <label htmlFor="username">Email</label>
          <input
            className="signUpModal--container__form__inputUsername"
            type="text"
            placeholder="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="signUpModal--container__form__inputPassword"
            type="password"
            placeholder="Password"
            id="password"
          />
          <button className="signUpModal--container__form__buttonSignUp">
            Create an account
          </button>
        </form>
      </main>
    </div>
  );
};
