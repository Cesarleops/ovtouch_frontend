import { useDispatch, useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import type { RootState } from "../../store/store";
import { onLogout, onVerification } from "../../store/auth/authSlice";
import { useEffect, useRef } from "react";
import "./home.scss";
import { UsersList } from "../../components/molecules/UsersList";
import { MainChat } from "../../components/molecules/MainChat";
import { showUsers } from "../../store/chat";
import { connectedUsers, validateJWT } from "../../store/auth/thunks";

const socket: Socket = io("http://localhost:3031");

export const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);
  const { isChatting } = useSelector((state: RootState) => state.chat);
  const handleClick = () => {
    dispatch(onLogout());
    localStorage.removeItem("token");
  };

  useEffect(() => {
    localStorage.setItem("token", user.token);
    //dispatch(validateJWT());
    dispatch(connectedUsers(user));
  }, [user]);

  useEffect(() => {
    socket.emit("loged-users", user.uid);
  }, [user]);
  return (
    <main className="mainBody">
      {/* <header>
        <button onClick={handleClick}>Sign Out</button>
      </header> */}
      <main className="mainBody--chat">
        <section className="mainBody--chat__list">
          <UsersList socket={socket} />
        </section>
        <section className="mainBody--chat__section">
          {isChatting ? (
            <MainChat socket={socket} />
          ) : (
            <div>
              <p>Start chatting</p>
            </div>
          )}
        </section>
      </main>
    </main>
  );
};
