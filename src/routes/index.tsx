import { Routes, Route } from "react-router-dom";
import { AdPage } from "../pages/AdPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/adPage" element={<AdPage />} />
    </Routes>
  );
};
