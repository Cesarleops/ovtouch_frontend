import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { useEffect, useState } from "react";
import { ChatFooter } from "../ChatFooter";
import axios from "axios";
import "./chatBody.scss";
export const ChatBody = ({ socket }) => {
  const { currentChat } = useSelector((state: RootState) => state.chat);
  const user = useSelector((state: RootState) => state.auth);
  const [messages, setMessages] = useState([]);
  const [recievedMessage, setRecievedMessage] = useState(null);
  const handleNewMessage = async (message) => {
    console.log("el mensaje es", messages);
    try {
      socket.emit("send-message", {
        sendedBy: user.uid,
        recievedBy: currentChat.uid,
        message,
      });
      await axios.post("http://localhost:3031/api/users/newmessage", {
        sendedBy: user.uid,
        recievedBy: currentChat.uid,
        text: message,
      });

      setMessages([...messages, message]);
    } catch (error) {
      console.log("esto salio mal", error);
    }
  };

  const getAllMessages = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3031/api/users/message",
        {
          sendedBy: user.uid,
          recievedBy: currentChat.uid,
        }
      );
      setMessages(data);
    } catch (error) {
      console.log("el error fue", error);
    }
  };

  useEffect(() => {
    getAllMessages();
  }, [currentChat]);

  useEffect(() => {
    socket.on("message-recieved", (message) => {
      setRecievedMessage(message);
      recievedMessage &&
        setMessages((prevState) => [...prevState, recievedMessage]);
    });
  }, [recievedMessage]);
  return (
    <section className="chatBody">
      <section>
        <section className="chatBody--title">
          <h3 className="chatBody--title__text">{currentChat.name}</h3>
        </section>
        <section className="chatBody--messages">
          {messages.map((m) => (
            <div className="chatBody--messages__body">
              <p key={m.sendedBy} className="chatBody--messages__body__text">
                {m.text}
              </p>
            </div>
          ))}
        </section>
      </section>
      <section>
        <ChatFooter newMessage={handleNewMessage} />
      </section>
    </section>
  );
};
