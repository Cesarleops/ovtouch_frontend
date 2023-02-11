import { useState } from "react";
import "./chatFooter.scss";
import { IoSend } from "react-icons/io5";
interface Message {
  message: string;
}
export const ChatFooter = (newMessage: (message: string) => Promise<void>) => {
  const [message, setMessage] = useState<Message["message"]>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newMessage(message);
    console.log("se ejecuto");
    setMessage("");
  };

  return (
    <div className="chatFooter">
      <form className="chatFooter--messageForm" onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={message}
          type="text"
          className="chatFooter--messageForm__textInput"
        />
        <div className="chatFooter--messageForm__iconSection">
          <IoSend
            type="submit"
            className="chatFooter--messageForm__sendMessage"
          />
        </div>
      </form>
    </div>
  );
};
