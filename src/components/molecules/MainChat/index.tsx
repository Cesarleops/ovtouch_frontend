import { ChatBody } from "../ChatBody";
import "./mainChat.scss";
export const MainChat = ({ socket }) => {
  return (
    <main className="mainChat">
      <ChatBody socket={socket} />
    </main>
  );
};
