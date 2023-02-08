import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

import { useSelector } from "react-redux";
import { Home } from "../pages/Home";
import { RootState } from "../store/store";

export const AppRouter = () => {
  const { status } = useSelector((state: RootState) => state.auth);
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
