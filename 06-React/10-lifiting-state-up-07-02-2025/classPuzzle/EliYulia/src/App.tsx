import { useState } from "react";
import "./App.css";
import SelectStarButton from "./View/Components/SelectStarButton";
import DisplayStar from "./View/Components/DisplayStar";

function App() {
  const [star, setStar] = useState<{ name: string; img: string }>({ name: "", img: "" });
  
  return (
    <div>
      <DisplayStar img={star.img} name={star.name} setStar={setStar}></DisplayStar>
      <SelectStarButton  setStar={setStar}
        name=" Lionel Messi"
        img="https://a.espncdn.com/photo/2024/0714/240715_top-100_inlines_003.jpg"
      />
      <SelectStarButton setStar={setStar}
        name="Cristiano Ronaldo"
        img="https://a.espncdn.com/photo/2024/0714/240715_top-100_inlines_013.jpg"
      />
      <SelectStarButton setStar={setStar}
        name="Thierry Henry "
        img="https://a.espncdn.com/photo/2024/0714/240715_top-100_inlines_048.jpg"
      />
    </div>
  );
}

export default App;
