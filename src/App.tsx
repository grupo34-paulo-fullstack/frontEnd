import { Toaster } from "react-hot-toast";
import "./App.css";
import BiggerButton from "./components/BiggerButton";

function App() {
  return (
    <>
      <BiggerButton
        children="Text Button"
        background="black"
        color="white"
        outline_color="black"
        background_hover="#212529"
        outline_hover="#212529"
      />
      <br />
      <BiggerButton
        children="Text Button"
        background="#DEE2E6"
        color="#495057"
        outline_color="#DEE2E6"
        background_hover="#CED4DA"
        outline_hover="#CED4DA"
      />
      <br />
      <BiggerButton
        children="Text Button"
        background="#CED4DA"
        color="#FFFFFF"
        outline_color=""
        background_hover=""
        outline_hover=""
        disable="not-allowed"
      />
      <br />
      <BiggerButton
        children="Text Button"
        background="#4529E6"
        color="#FFFFFF"
        outline_color="#5126EA"
        background_hover="#5126EA"
        outline_hover="#5126EA"
      />
      <Toaster />
    </>
  );
}

export default App;
