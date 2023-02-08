interface Props {
  messages: Array<string>;
}

export const ChatBody = ({ messages }: Props) => {
  return (
    <ul>
      {messages.map((m) => (
        <li> {m}</li>
      ))}
    </ul>
  );
};
