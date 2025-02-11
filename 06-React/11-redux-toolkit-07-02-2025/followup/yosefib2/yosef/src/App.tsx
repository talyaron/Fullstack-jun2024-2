import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddButton from "./view/button/Add";
import { useSelector } from "react-redux";
import { RootState } from './redux/store'
import MenusButton from "./view/button/Menus";
import AddNumber from "./view/button/AddNumber";

function App() {
  const counter = useSelector((state: RootState) => state.counter.value)
  const menus = useSelector((state: RootState) => state.counter.value)

  return (
    <>
      <h1>hey there</h1>
      <AddButton />
      <p>Counter: {counter}</p>
      <MenusButton />
      <p>Menus: {menus}</p>
      <AddNumber />

    </>
  );
}

export default App;
