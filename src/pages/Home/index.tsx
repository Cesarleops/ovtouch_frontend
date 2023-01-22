import { useDispatch } from "react-redux";
import { onLogout } from "../../store/auth/authSlice";
import { useEffect, useState } from "react";
import { socket } from "../../router/AppRouter";

export const Home = () => {
  const dispatch = useDispatch();
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
    const recieveMessage = (message) => {
      setMessages([
        {
          body: message,
        },
        ...messages,
      ]);
    };
    socket.on("message", recieveMessage);
    return () => {
      socket.off("message", recieveMessage);
    };
  }, [messages]);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Sign out</button>
      <form onSubmit={handleSubmit}>
        <input value={message} onChange={handleInputChange} type="text" />
        <button>Send</button>
      </form>
      {messages.map((msg) => (
        <div>
          <p>{msg.body}</p>
          <p>{msg.from}</p>
        </div>
      ))}
    </div>
  );
};
