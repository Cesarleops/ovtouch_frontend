import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startChat } from "../../../store/chat";

export const UsersList = ({ socket }) => {
  console.log(socket);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  users.map((u) => console.log(u));
  const handleClick = ({ uid }) => {
    console.log(uid);
    dispatch(startChat());
    socket.emit("start-chat", uid);
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
