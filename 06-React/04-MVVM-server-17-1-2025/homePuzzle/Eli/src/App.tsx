import { useState } from "react";

import "./App.css";

/*1.make an array of objects to represent the button with (i went with active and color) 

  2.iterate through the array of objects and give css styling of an active button if its active

  3.when a button is clicked iterate throughout the array deactivate every other button that isnt the one 
  we clicked by setting active to false and the one that we clicked 

  4.revere its active state so if its on it would turn off and if its off 
  it would turn on 
  
  5. check if the clicked button is active and if it is set the background color to its color 
  if its not change it back to white
*/

interface Btn {
  color: string;
  active: boolean;
}
const allButtons: Btn[] = [
  { color: "blue", active: false },
  { color: "yellow", active: false },
  //{ color: "brown", active: false },
  // { color: "black", active: false },
  // { color: "green", active: false },

  // uncomment for more buttons
];

const defaultColor = "white";

function App() {
  const [buttons, setButtons] = useState<Btn[]>(allButtons);

  const [backgroundColor, setColor] = useState(defaultColor);

  function change(i: number) {
    setColor(buttons[i].active ?defaultColor : buttons[i].color );
    setButtons(
      buttons.map((btn, idx) => ({
        ...btn,
        active: i === idx ? !btn.active : false,
      }))
    );
  }

  return (
    <>
      <div className="page" style={{ backgroundColor }}>
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
