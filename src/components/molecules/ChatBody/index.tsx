import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import { ChatFooter } from "../ChatFooter";
import axios from "axios";
import "./chatBody.scss";
export const ChatBody = ({ socket }) => {
  const { currentChat } = useSelector((state: RootState) => state.chat);
  const user = useSelector((state: RootState) => state.auth);
  const [messages, setMessages] = useState([]);

  const handleNewMessage = async (message) => {
    try {
      await axios.post("http://localhost:3031/api/users/newmessage", {
        sendedBy: user.uid,
        recievedBy: currentChat.uid,
        text: message,
      });
      socket.emit("send-message", {
        sendedBy: user.uid,
        recievedBy: currentChat.uid,
        message,
      });
      setMessages([...messages, { ownMessage: true, message }]);
      console.log("se agrego un mensaje");
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
    console.log("se trajo los mensajes");
  }, [currentChat]);

  useEffect(() => {
    console.log("se ejecuta el segundo efecto");
    socket.on("privado", (message) => {
      console.log("llego un mensaje");
      setMessages([...messages, { ownMessage: false, message }]);
    });
  }, [messages, socket]);

  // useEffect(() => {
  //   console.log("se ejecuta el efecto del mensaje que llega");
  //   recievedMessage &&
  //     setMessages((prevState) => [...prevState, recievedMessage]);
  // }, [recievedMessage]);

  // const ownMessages = messages.filter((item) => item.ownMessage);

  // console.log('ownMessages', ownMessages);

  return (
    <section className="chatBody">
      <section>
        <section className="chatBody--title">
          <h3 className="chatBody--title__text">{currentChat.name}</h3>
        </section>
        <section className="chatBody--messages">
          {messages.map((m) => (
            <div>
              <div
                className={`chatBody--messages__body__${
                  m.ownMessage ? "sended" : "recieved"
                }`}
              >
              </div> */}
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
