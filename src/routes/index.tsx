import { Routes, Route } from "react-router-dom";
import { AdPage } from "../pages/AdPage";
import { AnnouncementAnnouncerPage } from "../pages/Announcements_announcer";
import { Home } from "../pages/Home";
import { RegisterPage } from "../pages/Register";
import { LoginPage } from "../pages/Login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announcementPage" element={<AnnouncementAnnouncerPage />} />
      <Route path="/adPage" element={<AdPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
