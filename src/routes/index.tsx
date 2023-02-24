import { Routes, Route } from "react-router-dom";
import { AdPage } from "../pages/AdPage";
import { AnnouncementAnnouncerPage } from "../pages/Announcements_announcer";
import { Home } from "../pages/Home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announcementPage" element={<AnnouncementAnnouncerPage />} />
      <Route path="/adPage" element={<AdPage />} />
    </Routes>
  );
};
