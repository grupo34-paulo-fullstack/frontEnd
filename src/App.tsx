import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./routes";
import { AnnouncementAnnouncerPage } from "./pages/Announcements_announcer";

export const App = () => {
  return (
    <>
      <RoutesMain />
      <AnnouncementAnnouncerPage />
      <Toaster />
    </>
  );
};
