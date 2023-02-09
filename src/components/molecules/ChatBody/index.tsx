import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface Props {
  messages: Array<string>;
}

export const ChatBody = ({ messages }: Props) => {
  const { currentChat } = useSelector((state: RootState) => state.chat);
  console.log("estoy hablando con", currentChat);
  return (
    <section>
      <h1>{currentChat.name}</h1>
      <ul>
        {messages.map((m) => (
          <li> {m}</li>
        ))}
      </ul>
    </section>
  );
};
