import { useDispatch, useSelector } from "react-redux";
import { startChat } from "../../../redux/chat";
import "./usersList.scss";

export const UsersList = ({ socket }) => {
  const { users } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  console.log(users);

  const handleClick = (user) => {
    dispatch(startChat(user));
    socket.emit("start-chat", user.uid);
  };

  return (
    <div className="userList">
      {users.map((u) => (
        <div onClick={() => handleClick(u)} className="userBox" key={u.uid}>
          <p className="userBox--name">{u.name}</p>
        </div>
      ))}
    </div>
  );
};
