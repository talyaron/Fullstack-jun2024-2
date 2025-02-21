
import "./App.css";
import AddAmountButton from "./view/addAmount/AddAmount";
import AddButton from "./view/addButton/AddButton";
import SubButton from "./view/subButton/SubButton";
import Players from "./view/playerCard/playerCard";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";



function App() {
  const counter = useSelector((state:RootState) => state.counter.value)
  const img = useSelector((state:RootState) => state.Image.src)


  return (
    <>
      <h1>hi</h1>
     <AddButton />
      <SubButton />
      <AddAmountButton/> 
      <h2>{counter}s</h2>
      <h2><img src={img} alt={img} /></h2>
      <Players/>
    </>
  );
}

export default App;
