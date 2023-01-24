import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { onLogout, onVerification } from "../../store/auth/authSlice";
import { useEffect, useState } from "react";
import "./home.scss";
import { UsersList } from "../../components/molecules/UsersList";
import { MainChat } from "../../components/molecules/MainChat";

export const Home = ({ socket }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

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
  };

  useEffect(() => {
    socket.emit("loged-user", user);
  }, []);
  useEffect(() => {
    localStorage.setItem("token", user.token);
    validateJWT();
  }, [localStorage.getItem("token")]);
  return (
    <main>
      <header>
        <h1>Sendy</h1>
        <button onClick={handleClick}>Sign Out</button>
      </header>
      <UsersList socket={socket} />
      <MainChat socket={socket} />
    </main>
  );
};
