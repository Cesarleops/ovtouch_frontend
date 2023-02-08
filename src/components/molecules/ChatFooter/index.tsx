import { useState } from "react";

interface Message {
  message: string;
}
export const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState<Message["message"]>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
