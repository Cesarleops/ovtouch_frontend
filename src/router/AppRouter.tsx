import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

import { useSelector } from "react-redux";
import { Home } from "../pages/Home";

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
