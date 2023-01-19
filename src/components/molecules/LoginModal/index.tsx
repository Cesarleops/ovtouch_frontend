import "./loginModal.scss";

export const LoginModal = ({ onClose }) => {
  //   const { onClose } = props;

  return (
    <div className="loginModal">
      <main className="loginModal--container">
        <header className="loginModal--container__header">
          <button onClick={onClose}>x</button>
          <h1 className="loginModal--container__header__title">Log In</h1>
        </header>
        <form className="loginModal--container__form">
          <label htmlFor="username">Email</label>
          <input
            className="loginModal--container__form__inputUsername"
            type="text"
            placeholder="Username"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="loginModal--container__form__inputPassword"
            type="password"
            placeholder="Password"
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
