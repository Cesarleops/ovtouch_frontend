import { useEffect, useState } from "react";
import { ChatFooter } from "../ChatFooter";
import { ChatBody } from "../ChatBody";

interface Messages {
  messages: Array<string>;
}
export const MainChat = ({ socket }) => {
  const [messages, setMessages] = useState<Messages["messages"]>([]);

  useEffect(() => {
    socket.on("recieve-message", (message) =>
      setMessages([...messages, message])
    );
  }, [messages]);
  return (
    <main>
      <ChatBody messages={messages} />
      <ChatFooter socket={socket} />
    </main>
  );
};
