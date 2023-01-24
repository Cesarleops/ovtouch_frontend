import { useState } from "react";

export const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");
  const handleInputChange = ({ target }) => {
    setMessage(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} type="text"></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
