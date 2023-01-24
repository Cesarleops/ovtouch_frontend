import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { Home } from "../pages/Home";

const socket = io("http://localhost:3031");
console.log(socket);
export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/" element={<Home socket={socket} />} />
      ) : (
        <Route path="/" element={<LandingPage socket={socket} />} />
      )}
    </Routes>
  );
};
