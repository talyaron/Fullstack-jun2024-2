import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
interface Btn {
  color: string;
  active: boolean;
}
/*1.make an array of objects to represent the button with (i went with active and color) 

  2.iterate through the array of objects and give css styling of an active button if its active

  3.when a button is clicked iterate throughout the array deactivate every other button that isnt the one 
  we clicked by setting active to false and the one that we clicked 

  4.revere its active state so if its on it would turn off and if its off 
  it would turn on 
  
  5. check if the clicked button is active and if it is set the background color to its color 
  if its not change it back to white
*/


function App() {
  const [buttons, setButtons] = useState<Btn[]>([
    { color: "blue", active: false },
    { color: "yellow", active: false },
  ]);

  const [backgroundColor ,setColor]=useState("white");

  function change(i: number) {
    setColor(!buttons[i].active? buttons[i].color:"white");
    setButtons(
      buttons.map((btn, idx) => ({
        ...btn,
        active: i === idx ? !btn.active : false,
      }))
    );
  }

  return (
    <>
        <div style={{ backgroundColor }}>
      {buttons.map((btn, i) =>
        btn.active ? (
          <div key={i} className="btnContainer btn" onClick={() => change(i)}>
            <div className="btnInner selected btn"></div>
          </div>
        ) : (
          <div key={i} className="btnContainer" onClick={() => change(i)}>
            <div className="btnInner unSelected"></div>
          </div>
        )
      )}
      </div>
    </>
  );
}

export default App;
