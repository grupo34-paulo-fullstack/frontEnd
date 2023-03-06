import { Toaster } from "react-hot-toast";
import { Provider } from "./context/Context";
import { Provider as AuthProvider } from "./context/AuthContext";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <AuthProvider>
      <Provider>
        <RoutesMain />
        <Toaster
          toastOptions={{ style: { fontSize: 18 } }}
        />
      </Provider>
    </AuthProvider>
  );
};
