import { Toaster } from "react-hot-toast";
import { Provider } from "./context/Context";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <Provider>
      <RoutesMain />
      <Toaster />
    </Provider>
  );
};
