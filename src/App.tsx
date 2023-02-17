import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./routes";
import { AdPage } from "./pages/AdPage";

export const App = () => {
  return (
    <>
      <RoutesMain></RoutesMain>
      <Toaster />
    </>
  );
};
