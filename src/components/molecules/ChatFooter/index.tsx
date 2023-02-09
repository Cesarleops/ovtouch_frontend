import { useState } from "react";
import "./chatFooter.scss";
import { IoSend } from "react-icons/io5";
interface Message {
  message: string;
}
export const ChatFooter = ({ newMessage }) => {
  const [message, setMessage] = useState<Message["message"]>("");
  console.log(message);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newMessage(message);
    setMessage("");
  };

  return (
    <div>
      <form className="messageForm" onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={message}
          type="text"
          className="textInput"
        />
        <div className="iconSection">
          <IoSend type="submit" className="sendMessage" />
        </div>
      </form>
    </div>
  );
};
