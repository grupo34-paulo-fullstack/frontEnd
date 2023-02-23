import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <>
      <RoutesMain />
      <Toaster />
    </>
  );
};
