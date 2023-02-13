import { useState } from "react";
import "./loginModal.scss";
// import { BiArrowBack } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../redux/auth/thunks";

export const LoginModal = ({ onClose }:any) => {
  //   const { onClose } = props;

  const dispatch = useDispatch();
  const [initialForm, setInitialForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = ({ target }:any) => {
    setInitialForm({
      ...initialForm,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(userLogin(initialForm));
  };

  return (
    <div className="loginModal">
      <main className="loginModal--container">
        <header className="loginModal--container__header">
          <img
            src="/images/chatpng.png"
            alt="image-header"
            className="loginModal--container__header__img"
          />
          
          <AiFillCloseCircle
            fill="white"
            onClick={onClose}
            className="loginModal--container__header__button"
          />
        </header>
        <form className="loginModal--container__form" onSubmit={handleSubmit}>
          {/* <h1 className="loginModal--container__header__title">Log In</h1> */}
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
