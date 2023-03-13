import { Routes, Route } from "react-router-dom";
import { AnnouncerPage } from "../pages/Announcer";
import { Home } from "../pages/Home";
import { RegisterPage } from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { Annoucement } from "../pages/Annoucement";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announcer/:id" element={<AnnouncerPage />} />
      <Route path="/announcement/:id" element={<Annoucement />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
