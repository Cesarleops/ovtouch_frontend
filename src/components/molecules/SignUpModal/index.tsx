import React, { MouseEventHandler } from "react";
import { BiArrowBack } from "react-icons/bi";
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
          <BiArrowBack
            className="signUpModal--container__header__button"
            onClick={onClose}
          />
          <h1 className="signUpModal--container__header__title">Sign Up</h1>
        </header>
        <form className="signUpModal--container__form">
          <label
            htmlFor="username"
            className="signUpModal--container__form__nameLabel"
          >
            Email
          </label>
          <input
            className="signUpModal--container__form__inputUsername"
            type="text"
            id="email"
          />
          <label
            htmlFor="password"
            className="signUpModal--container__form__passwordLabel"
          >
            Password
          </label>
          <input
            className="signUpModal--container__form__inputPassword"
            type="password"
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
