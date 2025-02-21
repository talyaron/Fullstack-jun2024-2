import { useState } from "react";

import "./App.css";

interface Btn {
  color: string;
  active: boolean;
}
const allButtons: Btn[] = [
  { color: "blue", active: false },
  { color: "yellow", active: false },


  // uncomment for more buttons
];

const defaultColor = "white";

const selectedCssClass ="selected btn btnInner";
const unselectedCssClass ="unSelected btn btnInner"

function App() {
  const [buttons, setButtons] = useState<Btn[]>(allButtons);

  const [backgroundColor, setColor] = useState(defaultColor);

  function change(i: number) {
    setColor(buttons[i].active ? defaultColor : buttons[i].color);
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
        {buttons.map((btn, i) => (
          <div key={i} className="btnContainer btn" onClick={() => change(i)}>
            <div
              className={
                btn.active ? selectedCssClass: unselectedCssClass
              }
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
