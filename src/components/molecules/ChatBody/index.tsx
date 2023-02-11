import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import { ChatFooter } from "../ChatFooter";
import axios from "axios";
import "./chatBody.scss";
import { Socket } from 'socket.io-client';


export interface messagesInterface {
  sendedBy: string;
  recievedBy: string;
  message: string;
} 

export const ChatBody = ( {socket}:any) => {
  const {currentChat} = useSelector((state: RootState) => state.chat);

  const user = useSelector((state: RootState) => state.auth);
  
  const [messages, setMessages] = useState<messagesInterface[]>([
    {
      message:'',
      recievedBy:'',
      sendedBy:''
    }
  ]);  

  console.log(messages);
  
  const [recievedMessage, setRecievedMessage] = useState(null);
  
  console.log("el mensaje que llega", recievedMessage);
  
  const handleNewMessage = async (message:any) => {
    try {
      socket.emit("send-message", {
        sendedBy: user.uid,
        recievedBy: currentChat.uid!,
        message,
      });
      console.log("se envio");
      await axios.post("http://localhost:3031/api/users/newmessage", {
        sendedBy: user.uid,
        recievedBy: currentChat.uid,
        text: message,
      });
      console.log("se guardo");
      const newMessages = [...messages];
      newMessages.push({ ownMessage: true, message });
      setMessages(newMessages);
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
      console.log("llego un mensaje");
      setRecievedMessage({ ownMessage: false, message });
      console.log(recievedMessage);
    });
  }, [messages, socket]);

  useEffect(() => {
    recievedMessage &&
      setMessages((prevState) => [...prevState, recievedMessage]);
  }, [recievedMessage]);

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
            <div className={`chatBody--messages__body__${
                  m.ownMessage ? "sended" : "recieved"
                }`}>
                <p className="chatBody--messages__body__text">{m.message}</p>
              {/* <div
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
