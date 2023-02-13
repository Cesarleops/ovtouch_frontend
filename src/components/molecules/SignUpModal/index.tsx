import React, { MouseEventHandler, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import "./signUpModal.scss";
import { useDispatch } from "react-redux";
import { newUser } from "../../../redux/auth/thunks";
// interface LoginModalProps {
//   onClose: MouseEventHandler<SVGElement>;
// }

export const SignUpModal = ({ onClose }) => {
  //   const { onClose } = props;
  const dispatch = useDispatch();
  const [initialForm, setInitialForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = ({ target }) => {
    setInitialForm({
      ...initialForm,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newUser(initialForm));
    console.log("despachado");
  };

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
        <form className="signUpModal--container__form" onSubmit={handleSubmit}>
          <label
            htmlFor="username"
            className="signUpModal--container__form__usernameLabel"
          >
            Username
          </label>
          <input
            className="signUpModal--container__form__inputUsername"
            type="text"
            id="username"
            name="name"
            onChange={handleInputChange}
            value={initialForm.name}
          />
          <label
            htmlFor="email"
            className="signUpModal--container__form__emailLabel"
          >
            Email
          </label>
          <input
            className="signUpModal--container__form__inputEmailname"
            type="text"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={initialForm.email}
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
            name="password"
            onChange={handleInputChange}
            value={initialForm.password}
          />
          <button
            type="submit"
            className="signUpModal--container__form__buttonSignUp"
          >
            Create an account
          </button>
        </form>
      </main>
    </div>
  );
};
