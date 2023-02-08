import { useState } from "react";
import "./loginModal.scss";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../store/auth/thunks";

export const LoginModal = ({ onClose }) => {
  //   const { onClose } = props;

  const dispatch = useDispatch();
  const [initialForm, setInitialForm] = useState({
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
    dispatch(userLogin(initialForm));
  };

  return (
    <div className="loginModal">
      <main className="loginModal--container">
        <header className="loginModal--container__header">
          <BiArrowBack
            onClick={onClose}
            className="loginModal--container__header__button"
          />
          <h1 className="loginModal--container__header__title">Log In</h1>
        </header>
        <form className="loginModal--container__form" onSubmit={handleSubmit}>
          <label
            className="loginModal--container__form__nameLabel"
            htmlFor="username"
          >
            Email
          </label>
          <input
            onChange={handleInputChange}
            className="loginModal--container__form__inputUsername"
            type="text"
            id="email"
            name="email"
            value={initialForm.email}
          />
          <label
            className="loginModal--container__form__passwordLabel"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={handleInputChange}
            className="loginModal--container__form__inputPassword"
            type="password"
            id="password"
            name="password"
            value={initialForm.password}
          />
          <button
            type="submit"
            className="loginModal--container__form__buttonLogin"
          >
            Log In
          </button>
        </form>
      </main>
    </div>
  );
};
