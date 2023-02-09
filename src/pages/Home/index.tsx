import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { io, Socket } from "socket.io-client";
import type { RootState } from "../../store/store";
import { onLogout, onVerification } from "../../store/auth/authSlice";
import { useEffect, useState } from "react";
import "./home.scss";
import { UsersList } from "../../components/molecules/UsersList";
import { MainChat } from "../../components/molecules/MainChat";

const socket: Socket = io("http://localhost:3031");

export const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);
  const { isChatting } = useSelector((state: RootState) => state.chat);
  const [currentChat, setCurrentChat] = useState(undefined);

  const validateJWT = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3031/api/auth", {
      headers: {
        "x-token": token,
      },
    });

    dispatch(onVerification(response.data.token));
  };

  const handleClick = () => {
    dispatch(onLogout());
    localStorage.removeItem("token");
    socket.disconnect();
  };

  useEffect(() => {
    socket.connect();
    socket.emit("loged-user", user);
    localStorage.setItem("token", user.token);
    validateJWT();
  }, []);

  return (
    <main className="mainBody">
      <header>
        <button onClick={handleClick}>Sign Out</button>
      </header>
      <main className="mainBody--chat">
        <section className="mainBody--chat__list">
          <UsersList socket={socket} />
        </section>
        <section className="mainBody--chat__section">
          {isChatting ? (
            <MainChat currentChat={currentChat} socket={socket} />
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
