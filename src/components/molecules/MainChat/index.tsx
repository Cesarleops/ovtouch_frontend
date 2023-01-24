import { useEffect, useState } from "react";
import { ChatFooter } from "../ChatFooter";

export const MainChat = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {}, []);

  return (
    <main>
      <ChatFooter socket={socket} />
    </main>
  );
};
