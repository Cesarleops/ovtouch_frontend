import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startChat } from "../../../store/chat";

export const UsersList = ({ socket }) => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const handleClick = (user) => {
    dispatch(startChat(user));
    socket.emit("start-chat", user.uid);
  };
  useEffect(() => {
    socket.on("active-users", (connectedUsers) => setUsers(connectedUsers));
  }, [socket, users]);
  return (
    <div>
      {users.map((u) => (
        <div onClick={() => handleClick(u)}>{u.name}</div>
      ))}
    </div>
  );
};
