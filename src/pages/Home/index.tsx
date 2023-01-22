import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import io from "socket.io-client";
import { onLogout } from "../../store/auth/authSlice";
import { useEffect, useState } from "react";
import "./home.scss";

const socket = io("http://localhost:3031", {
  extraHeaders: {
    "x-token": localStorage.getItem("token"),
  },
});

export const Home = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  console.log(token);
  const validateJWT = async () => {
    const token = localStorage.getItem("token");

    const response = await axios.get("http://localhost:3031/api/auth", {
      headers: {
        "x-token": token,
      },
    });
    console.log("response", response);
  };

  const handleClick = () => {
    dispatch(onLogout());
  };
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      body: "",
    },
  ]);
  const handleInputChange = ({ target }) => {
    setMessage(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  useEffect(() => {
    localStorage.setItem("token", token);
    validateJWT();
    // const recieveMessage = (message) => {
    //   setMessages([
    //     ...messages,
    //     {
    //       body: message,
    //     },
    //   ]);
    // };
    // socket.on("message", recieveMessage);
    socket.on("active-users", (payload) => console.log(payload));
    return () => {
      // socket.off("message", recieveMessage);
    };
  }, []);
  return (
    <main>
      <header className="chatHeader">
        <h1>Sendy</h1>
        <button onClick={handleClick}>Sign out</button>
      </header>
      <main className="user">
        <section className="user--list">
          <ul>
            <li>Usuario 1</li>
            <li>Usuario 2</li>
            <li>Usuario 3</li>
          </ul>
        </section>
        <section className="user--info">
          <h2>Nombre usuario</h2>
          {messages.map((msg) => (
            <div>
              <p>{msg.body}</p>
            </div>
          ))}
          <form onSubmit={handleSubmit}>
            <input value={message} onChange={handleInputChange} type="text" />
            <button>Send</button>
          </form>
        </section>
      </main>
    </main>
  );
};
