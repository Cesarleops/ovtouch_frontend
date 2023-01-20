import "./loginModal.scss";
import { BiArrowBack } from "react-icons/bi";
export const LoginModal = ({ onClose }) => {
  //   const { onClose } = props;

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
        <form className="loginModal--container__form">
          <label
            className="loginModal--container__form__nameLabel"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="loginModal--container__form__inputUsername"
            type="text"
            id="email"
          />
          <label
            className="loginModal--container__form__passwordLabel"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="loginModal--container__form__inputPassword"
            type="password"
            id="password"
          />
          <button className="loginModal--container__form__buttonLogin">
            Log In
          </button>
        </form>
      </main>
    </div>
  );
};
