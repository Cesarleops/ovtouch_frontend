import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { Home } from "../pages/Home";

export const socket = io("http://localhost:3031");

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<LandingPage />} />
      )}
    </Routes>
  );
};
