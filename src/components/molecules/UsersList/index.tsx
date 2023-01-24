import { useEffect, useState } from "react";

export const UsersList = ({ socket }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    socket.on("active-users", (connectedUsers) => setUsers(connectedUsers));
  }, [socket, users]);
  return (
    <ul>
      {users.map((u) => (
        <li>{u.name}</li>
      ))}
    </ul>
  );
};
