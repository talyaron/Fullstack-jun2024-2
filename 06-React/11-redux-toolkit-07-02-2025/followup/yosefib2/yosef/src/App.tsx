import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddButton from "./view/button/Add";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>hey there</h1>
      <AddButton />
    </>
  );
}

export default App;
